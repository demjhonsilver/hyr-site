<template>
  <div class="examples-page">
    <section class="py-5 mt-5">
      <div class="container">
        <h1 class="display-4 fw-bold text-center mb-5">Hyraft Code Examples</h1>
        
        <div class="row g-4">
          <!-- Routes Configuration -->
          <div class="col-lg-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-dark text-white">
                <h5 class="mb-0">Routes Configuration</h5>
              </div>
              <div class="card-body">
                <pre class="m-0"><code>#infra/config/routes/web_routes.rb

require_root 'adapter-intake/web-app/request/home_web_adapter'
require_root 'adapter-intake/web-app/request/articles_web_adapter'



Web = WebRouter.draw do
  GET '/', to: [HomeWebAdapter, :home_page]


  GET '/articles', to: [ArticlesWebAdapter, :index]
  GET '/articles/new',               to: [ArticlesWebAdapter, :new]
  POST '/articles',                  to: [ArticlesWebAdapter, :create]
  GET '/articles/:id',               to: [ArticlesWebAdapter, :show]
  GET '/articles/:id/edit',          to: [ArticlesWebAdapter, :edit]
  PUT '/articles/:id',               to: [ArticlesWebAdapter, :update]
  DELETE '/articles/:id',            to: [ArticlesWebAdapter, :delete]

end

___________________________________________________________________

-------------------------------
EXPLICIT VERSION with no Magic (aka resources)
-------------------------------

require_root 'adapter-intake/web-app/request/home_web_adapter'
require_root 'adapter-intake/web-app/request/articles_web_adapter'
require_root 'adapter-intake/admin-app/request/adminusers_web_adapter'

  def direct(name, via:, path: nil)
    base_path = path || name.to_s.split('_').first  # article_management -> articles # comment_anyname here
    
    GET "/#{base_path}", to: [via, :index]
    GET "/#{base_path}/new", to: [via, :new]
    POST "/#{base_path}", to: [via, :create]
    GET "/#{base_path}/:id", to: [via, :show]
    GET "/#{base_path}/:id/edit", to: [via, :edit]
    PUT "/#{base_path}/:id", to: [via, :update]
    DELETE "/#{base_path}/:id", to: [via, :delete]
  end


Web = WebRouter.draw do
  GET '/', to: [HomeWebAdapter, :home_page]
  
  direct :article_management, via: ArticlesWebAdapter, path: 'articles'
  direct :adminusers, via: AdminusersWebAdapter, path: 'adminusers'
end

___________________________________________________________________

-------------------------------
Convention Over Configuration but still explicit
-------------------------------


def web_adapter(name)
  require_root "adapter-intake/web-app/request/#{name}_web_adapter"
  Object.const_get("#{name.capitalize}WebAdapter")
end


def admin_web_adapter(name)
  require_root "adapter-intake/admin-app/request/#{name}_web_adapter"
  Object.const_get("#{name.capitalize}WebAdapter")
end

  def direct(name, via:, path: nil)
    base_path = path || name.to_s.split('_').first 
    
    GET "/#{base_path}", to: [via, :index]
    GET "/#{base_path}/new", to: [via, :new]
    POST "/#{base_path}", to: [via, :create]
    GET "/#{base_path}/:id", to: [via, :show]
    GET "/#{base_path}/:id/edit", to: [via, :edit]
    PUT "/#{base_path}/:id", to: [via, :update]
    DELETE "/#{base_path}/:id", to: [via, :delete]
  end



Web = WebRouter.draw do
  GET '/', to: [web_adapter(:home), :home_page]
  direct :article_management, via: web_adapter(:articles), path: 'articles'
  direct :product_management, via: web_adapter(:products), path: 'products'
  direct :adminusers_anyname, via: admin_web_adapter(:adminusers), path: 'adminusers'
  direct :admindashboard, via: admindashboard_web_adapter(:admindashboard), path: 'admindashboard'
end

___________________________________________________________________


___________________________________________________________________

-------------------------------
API routes
-------------------------------

# infra/config/routes/api_routes.rb

require_root 'adapter-intake/api-app/request/articles_api_adapter'


Api = ApiRouter.draw do

  # Collection routes
  GET '/api/articles',      to: [ArticlesApiAdapter, :index]
  POST '/api/articles',     to: [ArticlesApiAdapter, :create]

  # Member routes - RESTful structure
  GET '/api/articles/:id',      to: [ArticlesApiAdapter, :show]
  PUT '/api/articles/:id',      to: [ArticlesApiAdapter, :update]
  DELETE '/api/articles/:id',   to: [ArticlesApiAdapter, :delete]

end


___________________________________________________________________

-------------------------------
API routes / Explicit Resources
-------------------------------


require_root 'adapter-intake/api-app/request/articles_api_adapter'

def direct_api(name, via:, path: nil)
  base_path = path || name.to_s.split('_').first
  
  GET "/api/#{base_path}", to: [via, :index]
  POST "/api/#{base_path}", to: [via, :create]
  GET "/api/#{base_path}/:id", to: [via, :show]
  PUT "/api/#{base_path}/:id", to: [via, :update]
  DELETE "/api/#{base_path}/:id", to: [via, :delete]
end

Api = ApiRouter.draw do
  
  direct_api :articles_api_anyname, via: ArticlesApiAdapter, path: 'articles'
  
end


___________________________________________________________________


</code></pre>
              </div>
            </div>
          </div>

          <!-- Template System -->
          <div class="col-lg-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-dark text-white">
                <h5 class="mb-0">Template (.hyr file)</h5>
              </div>
              <div class="card-body">
               
<pre><code>&lt;!-- pages/articles/new.hyr --&gt;
&lt;metadata html&gt;
&lt;/metadata&gt;

&lt;displayer html&gt;
&lt;div class="container mt-4"&gt;
  &lt;div class="row justify-content-center"&gt;
    &lt;div class="col-md-8"&gt;
      &lt;div class="d-flex align-items-center mb-4"&gt;
        &lt;h1 class="h2 mb-0"&gt;Create New Article&lt;/h1&gt;
      &lt;/div&gt;
      
      [.if_error.]
      
      &lt;form action="/articles" method="post" enctype="multipart/form-data"&gt;
        &lt;div class="mb-3"&gt;
          &lt;label for="title" class="form-label fw-bold"&gt;Title&lt;/label&gt;
          &lt;input type="text" class="form-control form-control-lg" id="title" name="data[title]" placeholder="Enter article title" required&gt;
        &lt;/div&gt;
        
        &lt;div class="mb-4"&gt;
          &lt;label for="content" class="form-label fw-bold"&gt;Content&lt;/label&gt;
          &lt;textarea class="form-control" id="content" name="data[content]" rows="12" placeholder="Write your article content here..." required&gt;&lt;/textarea&gt;
        &lt;/div&gt;
        
        &lt;div class="d-flex gap-2"&gt;
          &lt;button type="submit" class="btn btn-success"&gt;
            &lt;i class="bi bi-plus-circle me-2"&gt;&lt;/i&gt;Create Article
          &lt;/button&gt;
          &lt;a href="/articles" class="btn btn-outline-secondary"&gt;
            &lt;i class="bi bi-arrow-left me-2"&gt;&lt;/i&gt;Back to Articles
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/displayer&gt;

&lt;transmuter rb&gt;
def page_title
  "Create New Articles"
end

def if_error
  if @error
&lt;html&gt;
  &lt;div class='alert alert-danger d-flex align-items-center mb-4'&gt;
    &lt;i class="bi bi-exclamation-triangle-fill me-2"&gt;&lt;/i&gt;
    &lt;div&gt;#{purify_html(@error)}&lt;/div&gt;
  &lt;/div&gt;
&lt;/html&gt;
  else
    ""
  end
end
&lt;/transmuter&gt;
</code></pre>



              </div>
            </div>
          </div>

          <!-- Web Adapter -->
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-dark text-white">
                <h5 class="mb-0">Web Adapter (Controller)</h5>
              </div>
              <div class="card-body">
                <pre class="m-0"><code>require_root 'engine/circuit/articles_circuit'
require_root 'adapter-exhaust/data-gateway/sequel_articles_gateway'

class ArticlesWebAdapter
  def initialize
    gateway = SequelArticlesGateway.new
    @articles = ArticlesCircuit.new(gateway)
  end

  # GET /articles
  def index(request)
    articles = @articles.list || []
    {
      status: 200,
      locals: { articles: articles },
      display: 'pages/articles/index.hyr'
    }
  end

  # POST /articles - Create with image upload
  def create(request)
    data = request.params['data'] || {}
    files = request.params['files'] || {}
    
    image_file = handle_file_upload(files['image'])
    
    if data['title'] && data['content']
      article = @articles.create(
        title: data['title'],
        content: data['content'],
        image_file: image_file
      )
      { status: 303, headers: { 'Location' => "/articles" }, locals: {} }
    else
      { status: 422, locals: { error: "Validation failed" } }
    end
  end

  private

  def handle_file_upload(file_data)
    return nil unless file_data &amp;&amp; file_data[:tempfile]
    # File upload logic...
  end
end</code></pre>
              </div>
            </div>
          </div>

          <!-- Business Logic -->
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-dark text-white">
                <h5 class="mb-0">Business Circuit</h5>
              </div>
              <div class="card-body">
                <pre class="m-0"><code>require_root 'engine/source/article'

class ArticlesCircuit &lt; Engine::Circuit
  def initialize(gateway)
    @gateway = gateway
  end

  def create(title:, content:, image_file: nil)
    articles = @gateway.all
    max_id = articles.map { |a| a.id.to_i }.max || 0
    id = (max_id + 1).to_s
    article = Article.new(id: id, title: title, 
                         content: content, image_file: image_file)
    @gateway.save(article)
    article
  end

  def list
    @gateway.all
  end

  def find(id)
    @gateway.find(id)
  end

  def update(id:, title:, content:, image_file: nil)
    article = @gateway.find(id)
    return nil unless article
    
    updated_article = Article.new(id: id, title: title, 
                                 content: content, image_file: image_file)
    @gateway.save(updated_article)
  end

  def delete(id)
    @gateway.delete(id)
  end
end</code></pre>
              </div>
            </div>
          </div>

          <!-- Data Gateway -->
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-dark text-white">
                <h5 class="mb-0">Data Gateway</h5>
              </div>
              <div class="card-body">
                <pre class="m-0"><code>require_root 'engine/port/articles_gateway_port'
require_root 'engine/source/article'
require_root 'infra/database/sequel_connection'

class SequelArticlesGateway &lt; ArticlesGatewayPort
  def initialize
    @db = SequelConnection.db
    @articles = @db[:articles]
  end

  def save(article)
    if article.id &amp;&amp; find(article.id)
      @articles.where(id: article.id.to_i).update(
        title: article.title,
        content: article.content,
        image_file: article.image_file,
        updated_at: Time.now
      )
    else
      id = @articles.insert(
        title: article.title,
        content: article.content,
        image_file: article.image_file,
        created_at: Time.now,
        updated_at: Time.now
      )
      article.id = id.to_s
    end
    article
  end

  def all
    @articles.order(Sequel.desc(:created_at))
             .all.map { |row| map_row_to_article(row) }
  end

  def find(id)
    row = @articles.where(id: id.to_i).first
    row &amp;&amp; map_row_to_article(row)
  end

  def delete(id)
    @articles.where(id: id.to_i).delete
  end

  private

  def map_row_to_article(row)
    Article.new(
      id: row[:id].to_s,
      title: row[:title],
      content: row[:content],
      image_file: row[:image_file],
      created_at: row[:created_at],
      updated_at: row[:updated_at]
    )
  end
end</code></pre>
              </div>
            </div>
          </div>

          <!-- CLI Commands -->
          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-dark text-white">
                <h5 class="mb-0">CLI Commands</h5>
              </div>
              <div class="card-body">
                <pre class="m-0"><code>____________________________________________________________
# Generate complete hexagonal resource
                  
$ hyr assemble articles
or 
$ hyraft-rule assemble articles

🔧 Hyraft Assembly: Assembling 'articles' resource
⚡ Assembling Engine Layer...
✓ Created source: ./engine/source/article.rb
✓ Created circuit: ./engine/circuit/articles_circuit.rb
✓ Created port: ./engine/port/articles_gateway_port.rb
🔌 Assembling Adapter Layer...
✓ Created web adapter: ./adapter-intake/web-app/request/articles_web_adapter.rb
✓ Created gateway: ./adapter-exhaust/data-gateway/sequel_articles_gateway.rb


____________________________________________________________
# Generate migration

$ hyr-rule-db generate create_articles
or
$ hyraft-rule-db generate create_articles

✓ Created migration: ./infra/database/migrations/20251115111811_create_articles.rb



# Run migrations

$ hyr-rule-db migrate
or
$ hyraft-rule-db migrate

✓ Migrations completed successfully


____________________________________________________________
# Disassemble (clean removal)

$ hyr-rule disassemble articles
or
$ hyraft-rule disassemble articles

🗑️  Hyraft Disassembly: Disassembling 'articles' resource
⚡ Disassembling Engine Layer...
✓ Deleted: engine/source/article.rb
✓ Deleted: engine/circuit/articles_circuit.rb
✓ Deleted: engine/port/articles_gateway_port.rb
🔌 Disassembling Adapter Layer...
✓ Deleted: adapter-intake/web-app/request/articles_web_adapter.rb
✓ Deleted: adapter-exhaust/data-gateway/sequel_articles_gateway.rb</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic
</script>

<style scoped>
pre {
  background: #f8f9fa;
  border-radius: 0.375rem;
  padding: 1rem;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.4;
  overflow-x: auto;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}
</style>