<template>
  <div class="quickstart-page">
    <!-- Page Header -->
    <div class="page-header mb-5">
      <h1 class="display-4 fw-bold text-primary text-start">Creating Articles Tutorial</h1>
      <p class="lead text-muted text-start">Step-by-step guide to build a complete Articles application</p>
    </div>

    <!-- Create Articles Section -->
    <section id="create-articles" class="mb-5 text-start">
      <div class="d-flex align-items-center mb-4">
        <h2 class="h3 fw-bold me-3 text-start">Create Articles</h2>
      </div>

     
      <section id="database-config" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Create App and run server</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>
#open  Command Prompt / terminal
_____________________________________
type:
-----

hyraft do articles_app

cd articles_app

bundle install && npm install

_____________________________________

 Run server:
 
 hyr s thin
 ------------
 visit:
 
http://localhost:1091

----------
Open your IDE or Integrated Development Environment (example VS code)

Install Visual Studio code extension:

ctrl+shift+x
----------

type: hyraft

click install
-------</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapter 2: Database Setup -->
      <section id="chapter2" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Install Database Software with (mysql2 gem)</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>_______________________

Setup database:

This works with both XAMPP and MariaDB software (Windows 11).


##############################
FOR MariaDB

https://mariadb.org/
click download:

MariaDB Server
select 11.8.4
OS: Windows
MSI
Click download button
##############################

##############################
FOR Xampp

https://www.apachefriends.org/

click the download at the top menu

XAMPP for Windows 8.0.30, 8.1.25 & 8.2.12

Click :
8.2.12 / PHP 8.2.12 => 64 bit
##############################
____________________

Open this folder path:

C:\Ruby\{version}\msys64 

Note: This will depend on the folder corresponding to your Ruby version.

example only:

C:\Ruby34-x64\msys64 

----------------
Check if mingw64 file exists.

mingw64

-------------------

INSTALL GEM: mysql2 

(Note: An internet connection is required).

Open Command Prompt inside the folder C:Ruby34-x64/msys64

or

 Open command prompt:

 type: 

 cd C:Ruby34-x64/msys64

 -------------------
 then:

run:

gem install mysql2 --platform=ruby -- --with-mysql-dir=C:/Ruby34-x64/msys64/mingw64

-------------------



-----------</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapter 3: Install Database Gem -->
      <section id="chapter3" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Database Connection</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>_______________________


Open :

articles_app/Gemfile

____________________

open Gemfile:

add:

 gem 'mysql2', '~> 0.5.7'
 
------------
open: 
# infra/gems/database.rb

add:

require 'mysql2'

------------

bundle install

-------

Open:

# env.yml

edit
-------------

development:
  DB_CONNECTION: mysql
  DB_HOST: localhost      
  DB_PORT: 3306           
  DB_DATABASE: articles_app_development
  DB_USERNAME: root
  DB_PASSWORD: ********* (your password)
  DB_CHARSET: utf8mb4
  
  -----------------
  RUN! Xampp server / MariaDB server
  _________________
 
http://localhost/dashboard/

click

http://localhost/phpmyadmin/

go to phpmyadmin (via web browser)

add / create database table:

database name:

articles_app_development
----------------

  
  Open file:
  
  articles_app/test/db.rb
  
  -------------------
  
  test_config = config['development'] (set to development)

--------------
run:

ruby test/db.rb
-------------------
Result:

Database connection successful!


-----------------------

</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapter 4: Database Migration -->
      <section id="chapter4" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Database Migration Articles</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>_______________________

Database: migration Articles
--------------
Keep the server RUNNING! 

run:

hyr-rule-db generate create_articles title content:text

hyr-rule-db migrate
</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapter 5: Generate Assemble -->
      <section id="assemble" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Generate Assemble Articles</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>run:

hyr-rule assemble articles
</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Engine Section -->
      <section id="engine" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Engine::Source - article.rb</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code># engine/source/article.rb

class Article < Engine::Source
  attr_accessor :title, :content, :created_at, :updated_at, :status

  def initialize(id: nil, title: '', content: '', created_at: nil, updated_at: nil, status: :draft)
    super(id: id)
    @title = title
    @content = content
    @created_at = created_at || Time.now
    @updated_at = updated_at
    @status = status
  end

  def to_hash
    super.merge({
      title: @title,
      content: @content,
      created_at: @created_at,
      updated_at: @updated_at,
      status: @status
    })
  end

  def publish
    @status = :published
    @updated_at = Time.now
    self
  end

end
</code></pre>
            </div>
          </div>
        </div>

        <!-- Engine Circuit -->
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Engine::Circuit - articles_circuit.rb (CRUD)</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code># engine/circuit/articles_circuit.rb

 class ArticlesCircuit < Engine::Circuit
  def initialize(gateway)
    @gateway = gateway
  end

  def create(title:, content:)
    # Add validation
    return nil if title.to_s.strip.empty? || content.to_s.strip.empty?
    
    articles = @gateway.all
    max_id = articles.map { |a| a.id.to_i }.max || 0
    id = (max_id + 1).to_s
    article = Article.new(id: id, title: title, content: content)
    @gateway.save(article)
    article
  end

  def list
    @gateway.all
  end

  def find(id)
    @gateway.find(id)
  end

  def update(id:, title:, content:)
    # Add validation
    return nil if title.to_s.strip.empty? || content.to_s.strip.empty?
    
    article = @gateway.find(id)
    return nil unless article
    
    updated_article = Article.new(id: id, title: title, content: content)
    @gateway.save(updated_article)
  end

  def delete(id)
    article = @gateway.find(id)
    return nil unless article
    
    @gateway.delete(id)
  end

  def execute(input = {})
    operation = input[:operation]
    params = input[:params] || {}
    
    case operation
    when :create then create(params)
    when :list then list
    when :find then find(params[:id])
    when :update then update(params)
    when :delete then delete(params[:id])
    else
      raise "Unknown operation: #{operation}"
    end
  end
end</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Data Gateway -->
      <section id="data-gateway-sequel" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Data Gateway Sequel</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code># adapter-exhaust/data-gateway/sequel_articles_gateway.rb

require_root 'engine/port/articles_gateway_port'
require_root 'engine/source/article'
require_root 'infra/database/sequel_connection'

class SequelArticlesGateway < ArticlesGatewayPort
  def initialize
    @db = SequelConnection.db
    @articles = @db[:articles]
  end

  def save(article)
    if article.id && find(article.id)
      @articles.where(id: article.id.to_i).update(
        # Add update fields here
        title: article.title,
        content: article.content,
        updated_at: Time.now
      )
    else
      id = @articles.insert(
        # Add insert fields here
        title: article.title,
        content: article.content,
        created_at: Time.now,
        updated_at: Time.now
      )
      article.id = id.to_s
    end
    article
  end

  def all
    @articles.order(Sequel.desc(:created_at)).all.map { |row| map_row_to_article(row) }
  end

  def find(id)
    row = @articles.where(id: id.to_i).first
    row && map_row_to_article(row)
  end

  def delete(id)
    @articles.where(id: id.to_i).delete
  end

  private

  def map_row_to_article(row)
    Article.new(
      id: row[:id].to_s,
      # Add entity attributes here
      title: row[:title],
      content: row[:content],
      created_at: row[:created_at],
      updated_at: row[:updated_at]
    )
  end
end
</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Web Adapter -->
      <section id="web-adapter" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Web Adapter</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code># adapter-intake/web-app/request/articles_web_adapter.rb

require_root 'engine/circuit/articles_circuit'
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
      locals: { 
        articles: articles
      },
      display: 'pages/articles/index.hyr'
    }
  end

  # GET /articles/:id
  def show(request)
    id = request.params['route_params'].first
    article = @articles.find(id)

    if article
      {
        status: 200,
        locals: { 
          article: article
        },
        display: 'pages/articles/show.hyr'
      }
    else
      not_found_response(request)
    end
  end

  # GET /articles/new - Show create form
  def new(request)
    {
      status: 200,
      locals: {},
      display: 'pages/articles/new.hyr'
    }
  end

  # POST /articles - Create article
  def create(request)
    data = request.params['data'] || {}
    
     if data['title'] && data['content']
       article = @articles.create(
        title: data['title'],
         content: data['content']
       )
      
       {
         status: 303,
         headers: { 'Location' => "/articles" },
         locals: {}
      }
     else
       {
         status: 422,
         locals: { 
           error: "Title and content are required"
         },
         display: 'pages/articles/new.hyr'
       }
     end
    
  end

  # GET /articles/:id/edit - Show edit form
  def edit(request)
    id = request.params['route_params'].first
    article = @articles.find(id)
    
    if article
      {
        status: 200,
        locals: { 
          article: article
        },
        display: 'pages/articles/edit.hyr'
      }
    else
      not_found_response(request)
    end
  end

  # PUT /articles/:id - Update article
  def update(request)
    id = request.params['route_params'].first
    data = request.params['data'] || {}
    
    updated_article = @articles.update(
       id: id,
       title: data['title'],
       content: data['content']
    )
    
    if updated_article
      {
        status: 303,
        headers: { 'Location' => "/articles" },
        locals: {}
      }
    else
      {
        status: 422,
        locals: { 
          article: @articles.find(id),
          error: "Failed to update article" 
        },
        display: 'pages/articles/edit.hyr'
      }
    end
  end

  # DELETE /articles/:id - Delete article
  def delete(request)
    id = request.params['route_params'].first
    @articles.delete(id)
    
    {
      status: 303,
      headers: { 'Location' => "/articles" },
      locals: {}
    }
  end

  private

  def not_found_response(request)
    {
      status: 404,
      locals: { 
        error: "Article not found",
        back_url: '/articles',  
        back_text: 'Back to articles'  
      },
      display: 'pages/articles/404.hyr'
    }
  end
end</code></pre>
            </div>
          </div>
        </div>
      </section>










      <!-- API Adapter -->
      <section id="api-adapter" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">API Adapter (create a file)</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code># adapter-intake/api-app/request/articles_api_adapter.rb

require 'json'
require_root 'engine/circuit/articles_circuit'
require_root 'adapter-exhaust/data-gateway/sequel_articles_gateway'
require_root 'shared/helpers/response_formatter'

class ArticlesApiAdapter
  def initialize
    gateway = SequelArticlesGateway.new
    @articles = ArticlesCircuit.new(gateway)
  end
  
  # GET /api/articles
  def index(request_object = {})
    articles = @articles.list || []
    ResponseFormatter.json(articles.map(&:to_hash))
  end

  # POST /api/articles
  def create(request_object = {})
    begin
      data = JSON.parse(request_object[:body] || '{}')
      
      unless data['title'] && data['content']
        return ResponseFormatter.json({ error: "Title and content are required" }, status: 422)
      end

      article = @articles.create(
        title: data['title'],
        content: data['content']
      )
      
      return ResponseFormatter.json({ error: "Failed to create article" }, status: 422) unless article
      
      ResponseFormatter.json(article.to_hash, status: 201)
    rescue JSON::ParserError
      ResponseFormatter.json({ error: "Invalid JSON" }, status: 400)
    rescue => e
      puts "API Error: #{e.message}"
      ResponseFormatter.json({ error: "Internal server error" }, status: 500)
    end
  end

  # GET /api/articles/:id
  def show(request_object = {}, id)
    article = @articles.find(id)
    return ResponseFormatter.json({ error: "Article not found" }, status: 404) unless article

    ResponseFormatter.json(article.to_hash)
  end

  # PUT /api/articles/:id
  def update(request_object = {}, id)
    begin
      data = JSON.parse(request_object[:body] || '{}')
      
      unless data['title'] && data['content']
        return ResponseFormatter.json({ error: "Title and content are required" }, status: 422)
      end

      updated_article = @articles.update(
        id: id,
        title: data['title'],
        content: data['content']
      )
      
      return ResponseFormatter.json({ error: "Article not found" }, status: 404) unless updated_article

      ResponseFormatter.json(updated_article.to_hash)
    rescue JSON::ParserError
      ResponseFormatter.json({ error: "Invalid JSON" }, status: 400)
    rescue => e
      puts "API Update Error: #{e.message}"
      ResponseFormatter.json({ error: "Internal server error" }, status: 500)
    end
  end

  # DELETE /api/articles/:id
  def delete(request_object = {}, id)
    article = @articles.find(id)
    return ResponseFormatter.json({ error: "Article not found" }, status: 404) unless article

    @articles.delete(id)
    ResponseFormatter.json({ message: "Article deleted successfully" }, status: 200)
  end

end 
</code></pre>
            </div>
          </div>
        </div>
      </section>











      <!-- Routes -->
      <section id="routes" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Routes Configuration</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre>
<code>for Web

# infra/config/routes/web_routes.rb

require_root 'adapter-intake/web-app/request/home_web_adapter'
require_root 'adapter-intake/web-app/request/articles_web_adapter'

Web = WebRouter.draw do
  # Home
  GET '/', to: [HomeWebAdapter, :home_page]

  GET '/articles',              to: [ArticlesWebAdapter, :index]
  GET '/articles/new',          to: [ArticlesWebAdapter, :new]
  POST '/articles',             to: [ArticlesWebAdapter, :create]

  GET '/articles/:id',          to: [ArticlesWebAdapter, :show]
  GET '/articles/:id/edit',     to: [ArticlesWebAdapter, :edit]
  PUT '/articles/:id',          to: [ArticlesWebAdapter, :update]
  DELETE '/articles/:id',       to: [ArticlesWebAdapter, :delete]

end

______________________________________________________________________

for API

# infra/config/routes/api_routes.rb

require_root 'adapter-intake/api-app/request/articles_api_adapter'

Api = ApiRouter.draw do
  # === COLLECTION ROUTES ===
  GET '/api/articles',                to: [ArticlesApiAdapter, :index]   # GET all articles
  POST '/api/articles',               to: [ArticlesApiAdapter, :create] # CREATE article

  # === MEMBER ROUTES ===
  GET '/api/articles/:id',            to: [ArticlesApiAdapter, :show]   # GET single article
  PUT '/api/articles/:id',            to: [ArticlesApiAdapter, :update]   # UPDATE article
  DELETE '/api/articles/:id',         to: [ArticlesApiAdapter, :delete]   # DELETE article

end
</code></pre>
            </div>
          </div>
        </div>
      </section>



<h2>Templates | Make sure the “Hyraft” Visual Studio Code extension is installed.</h2>
<!-- Template Index -->
<section id="templates-index" class="mb-5">
  <div class="step-card card border-0 shadow-sm mb-4">
    <div class="card-header bg-light">
      <h5 class="mb-0 text-start">Articles</h5>
    </div>
    <div class="card-body text-start">
      <div class="code-block bg-dark text-light p-3 rounded">
        <pre><code>&lt;!-- adapters-intake/web-app/display/pages/articles/index.hyr --&gt;

&lt;metadata html&gt;
&lt;/metadata&gt;

&lt;displayer html&gt;
&lt;div class="container-fluid py-4"&gt;
  &lt;div class="row"&gt;
    &lt;div class="col-12"&gt;
      &lt;!-- Header Section --&gt;
      &lt;div class="d-flex justify-content-between align-items-center mb-4"&gt;
        &lt;h1 class="h2 mb-0 text-primary"&gt;&lt;heading /&gt;&lt;/h1&gt;
        [.button_create_article.]
      &lt;/div&gt;
      
      &lt;!-- Articles List --&gt;
      &lt;articles-list /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/displayer&gt;

&lt;transmuter rb&gt;
def display_heading
  "All Articles"
end

def button_create_article
&lt;html&gt;
  &lt;a href='/articles/new' class='btn btn-primary'&gt;
    &lt;i class='bi bi-plus-circle me-2'&gt;&lt;/i&gt;Create New Article
  &lt;/a&gt;
&lt;/html&gt;
end

def display_articles_list
  unless @articles&.any?
    no_articles
  else
    articles_html = @articles.map { |article| article_item(article) }.join
&lt;html&gt;
  &lt;div class="row g-4"&gt;
    #{articles_html}
  &lt;/div&gt;
&lt;/html&gt;
  end
end

def no_articles
&lt;html&gt;
  &lt;div class="card"&gt;
    &lt;div class="card-body text-center py-5"&gt;
      &lt;i class="bi bi-journal-x display-1 text-muted mb-3"&gt;&lt;/i&gt;
      &lt;h3 class="text-muted"&gt;No articles found&lt;/h3&gt;
      &lt;p class="text-muted"&gt;Get started by creating your first article.&lt;/p&gt;
      &lt;a href="/articles/new" class="btn btn-primary mt-2"&gt;
        &lt;i class="bi bi-plus-circle me-2"&gt;&lt;/i&gt;Create First Article
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/html&gt;
end

def article_item(article)
&lt;html&gt;
  &lt;div class="col-md-6 col-lg-4"&gt;
    &lt;div class="card h-100 shadow-sm"&gt;
      
      &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;
          &lt;a href="/articles/#{article.id}" class="text-decoration-none text-dark"&gt;
            #{purify_html(article.title)}
          &lt;/a&gt;
        &lt;/h5&gt;
        &lt;p class="card-text text-muted"&gt;#{purify_html(article.content[0,100])}#{article.content.length &gt; 100 ? '...' : ''}&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="card-footer bg-transparent"&gt;
        &lt;div class="d-flex gap-2"&gt;
          &lt;a href="/articles/#{article.id}/edit" class="btn btn-outline-primary btn-sm"&gt;
            &lt;i class="bi bi-pencil me-1"&gt;&lt;/i&gt;Edit
          &lt;/a&gt;
          &lt;form action="/articles/#{article.id}" method="post" class="d-inline"&gt;
            &lt;input type="hidden" name="_method" value="DELETE"&gt;
            &lt;button type="submit" class="btn btn-outline-danger btn-sm" 
                    onclick="return confirm('Are you sure you want to delete this article?')"&gt;
              &lt;i class="bi bi-trash me-1"&gt;&lt;/i&gt;Delete
            &lt;/button&gt;
          &lt;/form&gt;
          &lt;a href="/articles/#{article.id}" class="btn btn-outline-secondary btn-sm ms-auto"&gt;
            &lt;i class="bi bi-eye me-1"&gt;&lt;/i&gt;View
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/html&gt;
end

def page_title
  "Articles List"
end
&lt;/transmuter&gt;
</code></pre>
      </div>
    </div>
  </div>
</section>






<!-- Template New -->
<section id="templates-new" class="mb-5">
  <div class="step-card card border-0 shadow-sm mb-4">
    <div class="card-header bg-light">
      <h5 class="mb-0 text-start">New Article</h5>
    </div>
    <div class="card-body text-start">
      <div class="code-block bg-dark text-light p-3 rounded">
        <pre><code>&lt;!-- adapters-intake/web-app/display/pages/articles/new.hyr --&gt;

&lt;metadata html&gt;
&lt;/metadata&gt;

&lt;displayer html&gt;
&lt;div class="container mt-4"&gt;
  &lt;div class="row justify-content-center"&gt;
    &lt;div class="col-md-8"&gt;
      &lt;div class="d-flex align-items-center mb-4"&gt;
        &lt;h1 class="h2 mb-0"&gt;Create New Article&lt;/h1&gt;
      &lt;/div&gt;
      
      [.error_handler.]
      
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

def error_handler
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
</section>





<!-- Template Edit -->
<section id="templates-edit" class="mb-5">
  <div class="step-card card border-0 shadow-sm mb-4">
    <div class="card-header bg-light">
      <h5 class="mb-0 text-start">Edit Article </h5>
    </div>
    <div class="card-body text-start">
      <div class="code-block bg-dark text-light p-3 rounded">
        <pre><code>&lt;!-- adapters-intake/web-app/display/pages/articles/edit.hyr --&gt;

&lt;metadata html&gt;
&lt;/metadata&gt;

&lt;displayer html&gt;
&lt;div class="container mt-4"&gt;
  &lt;div class="row justify-content-center"&gt;
    &lt;div class="col-md-8"&gt;
      &lt;h1 class="h2 mb-4"&gt;Edit Article&lt;/h1&gt;
      
     [.error_message.]
      
     &lt;edit-form /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/displayer&gt;

&lt;transmuter rb&gt;
def page_title
  "Edit Article - #{@article.title}"
end

def display_edit_form
&lt;html&gt;
  &lt;form action="/articles/#{@article.id}" method="post" enctype="multipart/form-data"&gt;
    &lt;input type="hidden" name="_method" value="PUT"&gt;
    &lt;div class="mb-3"&gt;
      &lt;label for="title" class="form-label fw-bold"&gt;Title&lt;/label&gt;
      &lt;input type="text" class="form-control form-control-lg" id="title" name="data[title]" value="#{purify_html(@article.title)}" required&gt;
    &lt;/div&gt;
    
    
    &lt;div class="mb-4"&gt;
      &lt;label for="content" class="form-label fw-bold"&gt;Content&lt;/label&gt;
      &lt;textarea class="form-control" id="content" name="data[content]" rows="12" required&gt;#{purify_html(@article.content)}&lt;/textarea&gt;
    &lt;/div&gt;
    
    &lt;div class="d-flex gap-2"&gt;
      &lt;button type="submit" class="btn btn-success"&gt;
        &lt;i class="bi bi-check-circle me-2"&gt;&lt;/i&gt;Update Article
      &lt;/button&gt;
      &lt;a href="/articles/#{@article.id}" class="btn btn-outline-secondary"&gt;
        &lt;i class="bi bi-x-circle me-2"&gt;&lt;/i&gt;Cancel
      &lt;/a&gt;
      &lt;a href="/articles" class="btn btn-outline-primary"&gt;
        &lt;i class="bi bi-arrow-left me-2"&gt;&lt;/i&gt;Back to List
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/form&gt;
&lt;/html&gt;
end

def error_message
  if @error
&lt;html&gt;
  &lt;div class='alert alert-danger d-flex align-items-center'&gt;
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
</section>







<!-- Template Show -->
<section id="templates-show" class="mb-5">
  <div class="step-card card border-0 shadow-sm mb-4">
    <div class="card-header bg-light">
      <h5 class="mb-0 text-start">Show Article </h5>
    </div>
    <div class="card-body text-start">
      <div class="code-block bg-dark text-light p-3 rounded">
        <pre><code>&lt;!-- adapters-intake/web-app/display/pages/articles/show.hyr --&gt;

&lt;metadata html&gt;
&lt;/metadata&gt;

&lt;displayer html&gt;
&lt;div class="container py-4"&gt;
  &lt;div class="row justify-content-center"&gt;
    &lt;div class="col-lg-10"&gt;
      &lt;article-detail /&gt;
      &lt;article-actions /&gt;
      &lt;back-to-list /&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/displayer&gt;

&lt;transmuter rb&gt;
def display_article_detail
  unless @article
&lt;html&gt;
  &lt;div class="card border-danger"&gt;
    &lt;div class="card-body text-center py-5"&gt;
      &lt;i class="bi bi-exclamation-octagon display-1 text-danger mb-3"&gt;&lt;/i&gt;
      &lt;h1 class="text-danger"&gt;Article Not Found&lt;/h1&gt;
      &lt;p class="text-muted"&gt;The article you're looking for doesn't exist or may have been deleted.&lt;/p&gt;
      &lt;a href="/articles" class="btn btn-primary mt-3"&gt;
        &lt;i class="bi bi-arrow-left me-2"&gt;&lt;/i&gt;Back to Articles
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/html&gt;
  else
&lt;html&gt;
  &lt;div class="card shadow-sm"&gt;
    &lt;div class="card-header bg-light"&gt;
      &lt;div class="d-flex justify-content-between align-items-center"&gt;
        &lt;h1 class="h3 mb-0"&gt;#{purify_html(@article.title)}&lt;/h1&gt;
        &lt;span class="badge bg-secondary"&gt;ID: #{@article.id}&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="card-body"&gt;
      &lt;div class="article-content" style="white-space: pre-wrap; line-height: 1.6;"&gt;
        #{purify_html(@article.content)}
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/html&gt;
  end
end

def display_article_actions
  return '' unless @article
&lt;html&gt;
  &lt;div class="card mt-4"&gt;
    &lt;div class="card-body"&gt;
      &lt;h5 class="card-title"&gt;Article Actions&lt;/h5&gt;
      &lt;div class="d-flex gap-2 flex-wrap"&gt;
        &lt;a href='/articles/#{@article.id}/edit' class='btn btn-outline-primary'&gt;
          &lt;i class="bi bi-pencil me-2"&gt;&lt;/i&gt;Edit Article
        &lt;/a&gt;
        &lt;form action="/articles/#{@article.id}" method="post" class="d-inline"&gt;
          &lt;input type="hidden" name="_method" value="DELETE"&gt;
          &lt;button type="submit" class="btn btn-outline-danger" 
                  onclick="return confirm('Are you sure you want to delete this article? This action cannot be undone.')"&gt;
            &lt;i class="bi bi-trash me-2"&gt;&lt;/i&gt;Delete Article
          &lt;/button&gt;
        &lt;/form&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/html&gt;
end

def display_back_to_list
&lt;html&gt;
  &lt;div class="mt-4"&gt;
    &lt;a href='/articles' class='btn btn-outline-secondary'&gt;
      &lt;i class="bi bi-arrow-left me-2"&gt;&lt;/i&gt;Back to All Articles
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/html&gt;
end

def page_title
  if @article
    "#{@article.title}"
  else
    "Article Not Found"
  end
end
&lt;/transmuter&gt;    
</code></pre>
      </div>
    </div>
  </div>
</section>





<!-- Template Not Found -->
<section id="templates-404" class="mb-5">
  <div class="step-card card border-0 shadow-sm mb-4">
    <div class="card-header bg-light">
      <h5 class="mb-0 text-start">Not Found Article (404) </h5>
    </div>
    <div class="card-body text-start">
      <div class="code-block bg-dark text-light p-3 rounded">
        <pre><code>&lt;!-- adapters-intake/web-app/display/pages/articles/404.hyr --&gt;

&lt;!-- pages/articles/404.hyr --&gt;
&lt;metadata html&gt;
  &lt;title&gt;Article Not Found&lt;/title&gt;
&lt;/metadata&gt;

&lt;displayer html&gt;
&lt;div class="container mt-5"&gt;
  &lt;div class="row justify-content-center"&gt;
    &lt;div class="col-md-6 text-center"&gt;
      &lt;h1 class="display-4 text-muted"&gt;📄&lt;/h1&gt;
      &lt;h2&gt;[.error_message.]&lt;/h2&gt;
      &lt;p class="lead"&gt;The article you're looking for doesn't exist or may have been removed.&lt;/p&gt;
      &lt;div class="mt-4"&gt;
        &lt;a href="[.back_url.]" class="btn btn-primary me-2"&gt;
          [.back_text.]
        &lt;/a&gt;
        &lt;a href="/" class="btn btn-outline-secondary"&gt;
          Go Home
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/displayer&gt;

&lt;transmuter rb&gt;
def error_message
  @error
end

def back_url
  @back_url || '/articles'  
end

def back_text
  @back_text || 'Back to Articles'
end
&lt;/transmuter&gt;
</code></pre>
      </div>
    </div>
  </div>
</section>







      <section id="run-server" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Run server</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>
#open  Command Prompt / terminal
_____________________________________
/ For Web /
_____________________________________

 Run server:
 
 hyr s thin
 ------------
 visit:
 
http://localhost:1091/articles

ctrl + x ( To stop)

#################################################################

#open ANOTHER  Command Prompt / terminal
_____________________________________
/ For API /
_____________________________________

 Run server:
 
 hyr s thin --api
 ------------
 visit:
 
http://localhost:1092/api/articles

ctrl + x ( To stop)

-------------------
Optional:

If you encounter an error while running the server:

run: 

lsof -i :1091
lsof -i :1092


kill -9 $(lsof -t -i:1091)

kill -9 $(lsof -t -i:1092)

then

restart server

</code></pre>
            </div>
          </div>
        </div>
      </section>



      <section id="preloader" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Preloader (Super Fast)</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>
# infra/server/web-server.ru

-----------------------
uncomment: (remove # symbol)

 HyraftPreloader.preload_templates

 HyraftAssetPreloader.preload_assets(public_path)
----------
hit save:
_____________________________________

ctrl + x ( To stop)
then run again:
_____________________________________
/ For Web /
_____________________________________

 Run server:
 
 hyr s thin
 ------------
You will see: 
______________________________________________________________________
 hyr s thin 
[ WEB ] - Hyraft
* Using server: Thin
* Listening on http://localhost:1091
Starting development environment
 Hyraft Preloader: Scanning for templates...
Found 6 template files
  ℹ web-app/display/pages/articles/404.hyr (dynamic template)
  ℹ web-app/display/pages/articles/edit.hyr (dynamic template)
  ℹ web-app/display/pages/articles/index.hyr (dynamic template)
  ℹ web-app/display/pages/articles/new.hyr (dynamic template)
  ℹ web-app/display/pages/articles/show.hyr (dynamic template)
  ℹ web-app/display/pages/home/home.hyr (dynamic template)


Preload Statistics:
   Templates: 6 (0 pre-compiled, 6 dynamic, 0 sections only)
   Source Size: 73.03 KB
   Compiled Size: 6.15 KB
   Load Time: 0.016s
   Memory: 43.58 MB
   Status: PARTIALLY PRE-COMPILED

 Hyraft Asset Preloader: Scanning for assets...
Found 4 asset files
  ✓ favicon.ico (4.19 KB → 4.19 KB 0.0%)
  ✓ images/hyr-logo.png (99.32 KB → 99.32 KB 0.0%)
  ✓ images/hyr-logo.webp (20.5 KB → 20.5 KB 0.0%)
  ✓ styles/css/main.css (7.19 KB → 5.83 KB 18.91%)


Asset Preload Statistics:
   Assets: 4
   Original Size: 135.19 KB
   Compressed Size: 133.13 KB
   Total Savings: 2.06 KB
   Load Time: 0.004s
   Memory: 43.58 MB
   Status: ASSETS PRELOADED

2025-12-06 21:58:56 +0800 Thin web server (v2.0.1 codename Thinception)
2025-12-06 21:58:56 +0800 Maximum connections set to 1024
2025-12-06 21:58:56 +0800 Listening on 0.0.0.0:1091, CTRL+C to stop


GET /articles → 200 | 2.03ms | 18.82 KB
GET /articles/new → 200 | 0.85ms | 1.74 KB
POST /articles → 303 | 39.52ms | 0.0 KB
GET /articles → 200 | 46.75ms | 19.93 KB
GET /articles/38/edit → 200 | 1.58ms | 1.71 KB
PUT /articles/38 → 303 | 48.98ms | 0.0 KB
GET /articles → 200 | 2.75ms | 19.93 KB
GET /articles/38 → 200 | 1.77ms | 1.94 KB
DELETE /articles/38 → 303 | 43.29ms | 0.0 KB
GET /articles → 200 | 2.6ms | 18.82 KB
-------------------------------------------------------------------------
HTTP request method | route path (endpoint) | HTTP status | speed (milliseconds) | file size

</code></pre>
            </div>
          </div>
        </div>
      </section>





      <section id="test" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Test via Rake</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>
#################################################################

#open ANOTHER  Command Prompt / terminal
_____________________________________

# Run WITHOUT database ()

run:
TEST_NO_DB=1 rake test

# Run WITH database (if available)

run:
rake test

-------------------------------------------------------------------------
Test folder (articles_app/test)

# Check what require statements you currently have:
run:
grep -r "require_relative.*test_helper" test/

------------------------------------



# Run specific test types

run:
rake test:unit
rake test:integration

# Run single test file
run:
ruby -I test test/unit/engine/source/article_test.rb




--------------------------


# Run only unit tests (no database needed)
TEST_NO_DB=1 rake test test/unit/

# Run only acceptance tests  
TEST_NO_DB=1 rake test test/acceptance/

# Run only integration tests that don't need database
TEST_NO_DB=1 rake test test/integration/adapter-intake/

------------------------------------------------

ruby test/db.rb
open env.yml

----------------

# env.yml

# Application Settings

APP_NAME: myapp
SERVER_PORT: 1091
SERVER_PORT_API: 1092

development:
  DB_CONNECTION: mysql
  DB_HOST: localhost      
  DB_PORT: 3306           
  DB_DATABASE: articles_app_development
  DB_USERNAME: root
  DB_PASSWORD: ********* (your password)
  DB_CHARSET: utf8mb4



test:
  DB_CONNECTION: mysql
  DB_HOST: localhost      
  DB_PORT: 3306           
  DB_DATABASE: articles_app_test
  DB_USERNAME: root
  DB_PASSWORD: ********* (your password)
  DB_CHARSET: utf8mb4

 

production:
  DB_CONNECTION: mysql
  DB_HOST: localhost      
  DB_PORT: 3306           
  DB_DATABASE: articles_app_production
  DB_USERNAME: root
  DB_PASSWORD: ********* (your password)
  DB_CHARSET: utf8mb4

 
  --------------Make sure you created the database table.

  articles_app_development
  articles_app_test
  articles_app_production

-------------------------------------------------------------------------


to Run test and save to database:

APP_ENV=test hyr s thin
APP_ENV=test hyr s thin --api

--------------------------

to run in PRODUCTION:

APP_ENV=production hyr s thin
APP_ENV=production hyr s thin --api



Environment	Server	                                Migrations

Development	   hyr s thin	                         hyraft-rule-migrate migrate
Test	         APP_ENV=test hyr s thin	           APP_ENV=test hyraft-rule-migrate migrate
Production	   APP_ENV=production hyr s thin	     APP_ENV=production hyraft-rule-migrate migrate

</code></pre>
            </div>
          </div>
        </div>
      </section>



      <section id="assets" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Assets / CSS</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>
# public/index.html
_____________________________________
add:

&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"&gt;

_____________________________________
if you prefer node modules:

npm install bootstrap
npm install bootstrap-icons
--------------

# public/index.html

add:

&lt;metadata html&gt;
  &lt;link href="/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
  &lt;link rel="stylesheet" href="/node_modules/bootstrap-icons/font/bootstrap-icons.css"&gt;
&lt;/metadata&gt;


or

you can add inside the .hyr files at the bottom after transmuter or manifestor:

&lt;style src="/node_modules/bootstrap/dist/css/bootstrap.min.css" /&gt;
&lt;style src="/node_modules/bootstrap-icons/font/bootstrap-icons.css" /&gt;

------------
or

you can add inside the .hyr files:

&lt;metadata html&gt;
  &lt;link href="/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
  &lt;link rel="stylesheet" href="/node_modules/bootstrap-icons/font/bootstrap-icons.css"&gt;
&lt;/metadata&gt;


------------------------------------
CREATE your Own CSS style
_____________________________________
For custom CSS (located in public/css/styles/main.css)

(located in public/css/styles/myown.css)

&lt;style src="/styles/css/main.css" /&gt;
&lt;style src="/styles/css/myown.css" /&gt;

----------------


</code></pre>
            </div>
          </div>
        </div>
      </section>



      <section id="change-server" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Change Server</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>

  open Gemfile:
  add:

  select 1 or 2 server gems

  
    gem 'thin'    # Windows/Linux
    gem 'puma'    # Windows/Linux
    gem 'falcon'  # Linux
    gem 'iodine'  # Linux

    --------------------------
run:

bundle install

-----------------------
COMMAND to the run server:

hyr s thin                              # Start web server with Thin
hyr s puma                              # Start web server with Puma
hyr s iodine                            # Start web server with Iodine
hyr s falcon                            # Start web server with  Falcon

hyr-serve thin                          # Start web server with Thin
hyraft-server thin                      # Start web server with Thin
hyraft-server thin --api                # Start API server with Thin
hyraft-server puma -p 1091              # Start web server on port 1091
hyraft-server puma --port-api 1092      # Start API server on port 1092
hyraft-server falcon --http2            # Start with HTTP/2 (Falcon)
hyraft-server falcon --http3            # Start with HTTP/3 (Falcon)

____________________________________________________________________________

Test Environment

Alias: (or Shortcut)

APP_ENV=test hyr s [server-name]                        Start web server (test)
APP_ENV=test hyr s [server-name] --api                  Start API server directly (test)
APP_ENV=test hyr s-v                                    Show version (test)
APP_ENV=test hyr s-h                                    Show this help (test)

ex.

APP_ENV=test hyr s thin
APP_ENV=test hyr s puma
APP_ENV=test hyr s iodine
APP_ENV=test hyr s falcon



______________________________________________________________________

Production Environment

Alias: (or Shortcut)

APP_ENV=production hyr s [server-name]                        Start web server (production)
APP_ENV=production hyr s [server-name] --api                  Start API server directly (production)
APP_ENV=production hyr s-v                                    Show version (production)
APP_ENV=production hyr s-h                                    Show this help (production)

ex.

APP_ENV=production hyr s thin
APP_ENV=production hyr s puma
APP_ENV=production hyr s iodine
APP_ENV=production hyr s falcon

_____________________________________
You can visit:


https://www.rubydoc.info/gems/hyraft-server

</code></pre>
            </div>
          </div>
        </div>
      </section>







    </section>
  </div>
</template>

<script setup>
// Component logic
</script>

<style scoped>
.quickstart-page {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.page-header {
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 1.5rem;
}

.code-block {
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-x: auto;
  background-color: #212529 !important;
  color: #e9ecef !important;
}

.code-block pre {
  margin: 0;
  color: inherit;
  background-color: transparent;
}

.code-block code {
  color: #e9ecef;
  background-color: transparent;
  border: none;
  padding: 0;
}

/* Force left alignment */
.text-start {
  text-align: left !important;
}

h1.text-start,
h2.text-start,
h3.text-start,
h4.text-start,
h5.text-start,
h6.text-start,
p.text-start,
div.text-start {
  text-align: left !important;
}

.card-body.text-start {
  text-align: left;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .code-block {
    font-size: 0.8rem;
    padding: 1rem;
  }
}
</style>