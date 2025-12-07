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

      <!-- Chapter 1: Create App -->
      <section id="database-config" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Chapter 1: Create App and run server</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>_______________________
Chapter 1
Create App and run server
____________________

hyraft do articles_app

-----------

cd articles_app
bundle install && npm install

----------------------
 Run server:
 
 hyr s thin
 ------------
 visit:
 
http://localhost:1091

----------
Install Vscode extension:

hyraft:

ctrl+shift+x
----------

type: hyraft

install:
-------</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapter 2: Database Setup -->
      <section id="chapter2" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Chapter 2: Database Setup</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>_______________________
Chapter 2
Setup database:
____________________
-------------------
Run database Server: mariadb / mysql /postgresql
---------------------

cd /opt/lampp

sudo ./manager-linux-x64.run

if running:

-----------
http://localhost/dashboard/
--------

create database table:

hyr_articles_development
-----------</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapter 3: Install Database Gem -->
      <section id="chapter3" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Chapter 3: Install database gem</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>_______________________
Chapter 3
Install database gem:

mysql2
postgresql
____________________

open Gemfile:

add:

 gem 'mysql2', '~> 0.5.7'
 
 or
 
 gem 'pg'
 
------------
open: 
# infra/gems/database.rb

--add:
require 'mysql2'

or

# require 'pg'

------------

bundle install

-------

Open:

# env.yml

-------------

development:
  DB_CONNECTION: mysql
  DB_HOST: localhost      
  DB_PORT: 3306           
  DB_DATABASE: hyr_articles_development
  DB_USERNAME: root
  DB_PASSWORD: password123 
  DB_CHARSET: utf8mb4
  
  -----------------
  
  Open # test/db.rb
  
  -------------------
  
  test_config = config['development']

--------------
run:

ruby test/db.rb
-------------------

Database connection successful!</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapter 4: Database Migration -->
      <section id="chapter4" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Chapter 4: Database Migration Articles</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>_______________________
Chapter 4
Database: migration Articles
--------------
!Keep the server RUNNING:

hyr-rule
-------------

hyr-rule-db generate create_articles title content:text
____________________

hyr-rule-db migrate
-----</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapter 5: Generate Assemble -->
      <section id="assemble" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Chapter 5: Generate Assemble Articles</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>_______________________
Chapter 5
Generate Assemble Articles
_______________________

hyr-rule assemble articles
-----------------</code></pre>
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
<pre><code>ENGINES
------------------
source/article.rb
----------
 attr_accessor add: :title, :content, :status
 
 def initialize add: (title: '', content: '', status: :draft)
 ---------------------
 variables: add
 
    @title = title
    @content = content
    @status = status
    
    ------------
 
    super.merge({
      title: @title,
      content: @content,
      status: @status
    })
  end

  def publish
    @status = :published
    @updated_at = Time.now
    self
  end
------------</code></pre>
            </div>
          </div>
        </div>

        <!-- Engine Circuit -->
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Engine::Circuit - articles_circuit.rb</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>engine/circuit/articles_circuit.rb

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
  
  def find(id)
    @gateway.find(id)
  end
  
  def list
    @gateway.all
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
<pre><code>sequel_articles_gateway.rb

  def save(article)
    if article.id && find(article.id)
      @articles.where(id: article.id.to_i).update(
        title: article.title,
        content: article.content
      )
    else
      @articles.insert(
        title: article.title,
        content: article.content
      )
    end
  end

  def map_row_to_article(row)
    Article.new(
      id: row[:id].to_s,
      title: row[:title],
      content: row[:content]
    )
  end</code></pre>
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
<pre><code>articles_web_adapter.rb
-------------

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

  def update(request)
    data = request.params['data'] || {}
    id = request.params['id']
    
    updated_article = @articles.update(
      id: id,
      title: data['title'],
      content: data['content']
    )</code></pre>
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
<pre><code># infra/config/routes/web_routes.rb

require_root 'adapter-intake/web-app/request/articles_web_adapter'

  GET '/articles',                  to: [ArticlesWebAdapter, :index]
  GET '/articles/new',              to: [ArticlesWebAdapter, :new]
  POST '/articles',                 to: [ArticlesWebAdapter, :create]
  GET '/articles/:id',              to: [ArticlesWebAdapter, :show]
  GET '/articles/:id/edit',         to: [ArticlesWebAdapter, :edit]
  PUT '/articles/:id',              to: [ArticlesWebAdapter, :update]
  DELETE '/articles/:id',           to: [ArticlesWebAdapter, :delete]</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Templates -->
      <section id="templates" class="mb-5">
        <div class="step-card card border-0 shadow-sm mb-4">
          <div class="card-header bg-light">
            <h5 class="mb-0 text-start">Templates (.hyr files)</h5>
          </div>
          <div class="card-body text-start">
            <div class="code-block bg-dark text-light p-3 rounded">
<pre><code>index.hyr - Articles list page
new.hyr - Create article form
show.hyr - Show single article
edit.hyr - Edit article form
404.hyr - Not found template</code></pre>
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