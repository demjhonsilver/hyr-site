<!-- views/getting-started/Examples.vue -->
<template>
  <div class="examples-page">
    <!-- Page Header -->
    <div class="page-header mb-5">
      <h1 class="display-4 fw-bold text-primary">Examples</h1>
      <p class="lead text-muted">See Hyraft in action with real-world examples and code snippets.</p>
    </div>

    <!-- Complete Component Example -->
    <section id="complete-component" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Complete Component Example</h2>
      
      <div class="card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <h5 class="mb-0">
            <i class="bi bi-file-code me-2"></i>
            Full Component with Metadata & Bootstrap
          </h5>
        </div>
        <div class="card-body">
          <p class="card-text">A complete Hyraft component showing metadata, dynamic content, and Bootstrap integration.</p>
          
          <div class="code-block bg-dark text-light p-3 rounded mb-4">
            <code class="text-light">
<span class="text-info"># adapter-intake/web-app/display/about/about.hyr</span><br>
<br>
<span class="text-success">&lt;metadata html&gt;</span><br>
&nbsp;&nbsp;&lt;title&gt;[.page_title.]&lt;/title&gt;<br>
&nbsp;&nbsp;&lt;meta name="description" content="[.page_description.]"&gt;<br>
&nbsp;&nbsp;&lt;meta name="keywords" content="[.page_keywords.]"&gt;<br>
&nbsp;&nbsp;&lt;link rel="canonical" href="[.page_url.]"&gt;<br>
&nbsp;&nbsp;&lt;meta name="robots" content="index, follow"&gt;<br>
&nbsp;&nbsp;&lt;meta property="og:title" content="[.page_title.]"&gt;<br>
&nbsp;&nbsp;&lt;meta property="og:description" content="[.page_description.]"&gt;<br>
&nbsp;&nbsp;&lt;meta property="og:type" content="website"&gt;<br>
&nbsp;&nbsp;&lt;meta property="og:url" content="[.page_url.]"&gt;<br>
&nbsp;&nbsp;&lt;meta property="og:image" content="[.page_image.]"&gt;<br>
&nbsp;&nbsp;&lt;meta name="twitter:card" content="summary_large_image"&gt;<br>
&nbsp;&nbsp;&lt;meta name="twitter:title" content="[.page_title.]"&gt;<br>
&nbsp;&nbsp;&lt;meta name="twitter:description" content="[.page_description.]"&gt;<br>
&nbsp;&nbsp;&lt;meta name="twitter:image" content="[.page_image.]"&gt;<br>
<br>
&lt;script type="application/ld+json"&gt;<br>
{<br>
&nbsp;&nbsp;"@context": "https://schema.org",<br>
&nbsp;&nbsp;"@type": "Article",<br>
&nbsp;&nbsp;"headline": "[.page_title.]",<br>
&nbsp;&nbsp;"description": "[.page_description.]",<br>
&nbsp;&nbsp;"author": { "@type": "Person", "name": "[.author_name.]" },<br>
&nbsp;&nbsp;"datePublished": "[.publish_date.]",<br>
&nbsp;&nbsp;"mainEntityOfPage": { "@type": "WebPage", "@id": "[.page_url.]" },<br>
&nbsp;&nbsp;"image": "[.page_image.]"<br>
}<br>
&lt;/script&gt;<br>
<span class="text-success">&lt;/metadata&gt;</span><br>
<br>
<span class="text-success">&lt;displayer html&gt;</span><br>
&nbsp;&nbsp;&lt;h1&gt;Page built using a fast custom Ruby compiler with components!&lt;/h1&gt;<br>
&nbsp;&nbsp;&lt;div class="hello-card"&gt;Hello, [.page_description.]!&lt;/div&gt;<br>
&nbsp;&nbsp;&lt;dynamic-card context="Dynamic Context" /&gt;<br>
&nbsp;&nbsp;&lt;button class="color-toggle-btn"&gt;Toggle Color&lt;/button&gt;<br>
<span class="text-success">&lt;/displayer&gt;</span><br>
<br>
<span class="text-success">&lt;transmuter rb&gt;</span><br>
def page_title = @page_title || "Hextect - About"<br>
def page_description = @page_description || "About our fast Ruby framework"<br>
def page_keywords = @page_keywords || "ruby, framework, SFC, components"<br>
def page_url = @page_url || "https://hextect.dev/about"<br>
def page_image = @page_image || "https://hextect.dev/images/cover.jpg"<br>
def author_name = @author_name || "Hextect Team"<br>
def publish_date = @publish_date || Time.now.strftime("%Y-%m-%d")<br>
<br>
def display_dynamic_card(context:)<br>
&nbsp;&nbsp;"&lt;div class='dynamic-card'&gt;Hello, #{publish_date} #{context}&lt;/div&gt;"<br>
end<br>
<span class="text-success">&lt;/transmuter&gt;</span><br>
<br>
<span class="text-success">&lt;manifestor js&gt;</span><br>
const state = { isCrimson: false };<br>
<br>
function bindStyle(selector, property, callback) {<br>
&nbsp;&nbsp;const el = document.querySelector(selector);<br>
&nbsp;&nbsp;if (!el) return;<br>
&nbsp;&nbsp;Object.defineProperty(state, property, {<br>
&nbsp;&nbsp;&nbsp;&nbsp;get() { return this[`_${property}`]; },<br>
&nbsp;&nbsp;&nbsp;&nbsp;set(value) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this[`_${property}`] = value;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el.style.color = callback(value);<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;});<br>
}<br>
<br>
bindStyle('.hello-card', 'isCrimson', val => val ? 'crimson' : '');<br>
<br>
document.addEventListener('DOMContentLoaded', () => {<br>
&nbsp;&nbsp;document.querySelector('.color-toggle-btn').addEventListener('click', () => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;state.isCrimson = !state.isCrimson;<br>
&nbsp;&nbsp;});<br>
});<br>
<span class="text-success">&lt;/manifestor&gt;</span><br>
<br>
<span class="text-success">&lt;style src="styles/css/about.css" /&gt;</span>
            </code>
          </div>
        </div>
      </div>
    </section>

    <!-- Bootstrap Integration Example -->
<!-- views/getting-started/Examples.vue - Only Bootstrap Integration Section -->
<section id="bootstrap-integration" class="mb-5">
  <h2 class="h3 fw-bold mb-4">Bootstrap Integration</h2>
  
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-light">
      <h5 class="mb-0">
        <i class="bi bi-bootstrap me-2"></i>
        External Library Integration
      </h5>
    </div>
    <div class="card-body">
      <p class="card-text">How to integrate external libraries like Bootstrap using Hyraft components.</p>
      
      <div class="code-block bg-dark text-light p-3 rounded mb-4">
        <code class="text-light">
<span class="text-info"># External cdn link integration component</span><br>
<span class="text-info"># articles/index.hyr</span><br>
<br>
<span class="text-success">&lt;metadata html&gt;</span><br>
&lt;require file="shared/bootstrap/bs" /&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;bootstrap_css /&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;bootstrap_js /&gt;<br>
<span class="text-success">&lt;/metadata&gt;</span><br>
<br>
<span class="text-success">&lt;displayer html&gt;</span><br>
&lt;div class="container-fluid py-4"&gt;<br>
&nbsp;&nbsp;&lt;div class="row"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="col-12"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-info">&lt;!-- Header Section --&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="d-flex justify-content-between align-items-center mb-4"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 class="h2 mb-0 text-primary"&gt;[.greeting.]&lt;/h1&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button-create-article label="Create New Article" /&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-info">&lt;!-- Articles List --&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;articles-list /&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&lt;/div&gt;<br>
&lt;/div&gt;<br>
<span class="text-success">&lt;/displayer&gt;</span><br>
<br>
<span class="text-success">&lt;transmuter rb&gt;</span><br>
def greeting<br>
&nbsp;&nbsp;"All Articles"<br>
end<br>
<br>
def display_articles_list<br>
&nbsp;&nbsp;unless @articles&.any?<br>
<span class="text-warning">&lt;html&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card-body text-center py-5"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i class="bi bi-journal-x display-1 text-muted mb-3"&gt;&lt;/i&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h3 class="text-muted"&gt;No articles found&lt;/h3&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="text-muted"&gt;Get started by creating your first article.&lt;/p&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/articles/new" class="btn btn-primary mt-2"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i class="bi bi-plus-circle me-2"&gt;&lt;/i&gt;Create First Article<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
&nbsp;&nbsp;end<br>
&nbsp;&nbsp;<br>
&nbsp;&nbsp;articles_html = @articles.map { |article| article_item(article) }.join<br>
<span class="text-warning">&lt;html&gt;</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="row g-4"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#{articles_html}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
end<br>
<br>
def article_item(article)<br>
<span class="text-warning">&lt;html&gt;</span><br>
&nbsp;&nbsp;&lt;div class="col-md-6 col-lg-4"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card h-100 shadow-sm"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card-body"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5 class="card-title"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/articles/#{article.id}" class="text-decoration-none text-dark"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#{h(article.title)}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/h5&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="card-text text-muted"&gt;#{h(article.content[0,100])}#{article.content.length > 100 ? '...' : ''}&lt;/p&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="card-footer bg-transparent"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="d-flex gap-2"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/articles/#{article.id}/edit" class="btn btn-outline-primary btn-sm"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i class="bi bi-pencil me-1"&gt;&lt;/i&gt;Edit<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;form action="/articles/#{article.id}" method="post" class="d-inline"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="hidden" name="_method" value="DELETE"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button type="submit" class="btn btn-outline-danger btn-sm" <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onclick="return confirm('Are you sure you want to delete this article?')"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i class="bi bi-trash me-1"&gt;&lt;/i&gt;Delete<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a href="/articles/#{article.id}" class="btn btn-outline-secondary btn-sm ms-auto"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;i class="bi bi-eye me-1"&gt;&lt;/i&gt;View<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&lt;/div&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
end<br>
<br>
def display_button_create_article(label:)<br>
<span class="text-warning">&lt;html&gt;</span><br>
&nbsp;&nbsp;&lt;a href='/articles/new' class='btn btn-primary'&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;i class='bi bi-plus-circle me-2'&gt;&lt;/i&gt;#{label}<br>
&nbsp;&nbsp;&lt;/a&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
end<br>
<br>
def page_title<br>
&nbsp;&nbsp;"Articles List"<br>
end<br>
<span class="text-success">&lt;/transmuter&gt;</span><br>
<br>
<span class="text-info"># shared/bootstrap/bs.hyr</span><br>
<br>
<span class="text-success">&lt;displayer html&gt;</span><br>
&lt;bootstrap_css /&gt;<br>
&lt;bootstrap_js /&gt;<br>
<span class="text-success">&lt;/displayer&gt;</span><br>
<br>
<span class="text-success">&lt;transmuter rb&gt;</span><br>
def display_bootstrap_css<br>
<span class="text-warning">&lt;html&gt;</span><br>
&nbsp;&nbsp;&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"&gt;<br>
&nbsp;&nbsp;&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
end<br>
<br>
def display_bootstrap_js<br>
<span class="text-warning">&lt;html&gt;</span><br>
&nbsp;&nbsp;&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
end<br>
<span class="text-success">&lt;/transmuter&gt;</span>
        </code>
      </div>
    </div>
  </div>
</section>
    













    <!-- Component Rendering Section -->
    <section id="component-rendering" class="mb-5">
      <h2 class="h3 fw-bold mb-4">Component Rendering Examples</h2>
      
      <div class="card border-0 shadow-sm mb-4">
        <div class="card-header bg-light">
          <h5 class="mb-0">
            <i class="bi bi-puzzle me-2"></i>
            User Cards & Article Lists
          </h5>
        </div>
        <div class="card-body">
          <p class="card-text">Create reusable components with clean HTML syntax and Ruby logic.</p>
          
          <div class="code-block bg-dark text-light p-3 rounded mb-4">
            <code class="text-light">
<span class="text-success">&lt;transmuter rb&gt;</span><br>
def display_user_card(user)<br>
<span class="text-warning">&lt;html&gt;</span><br>
&lt;div class="user-card"&gt;<br>
&nbsp;&nbsp;&lt;img src="#{user.avatar}" alt="#{user.name}"&gt;<br>
&nbsp;&nbsp;&lt;h3&gt;#{user.name}&lt;/h3&gt;<br>
&nbsp;&nbsp;&lt;p class="role"&gt;#{user.role.capitalize}&lt;/p&gt;<br>
&nbsp;&nbsp;&lt;p&gt;Joined: #{user.created_at.strftime("%B %Y")}&lt;/p&gt;<br>
&lt;/div&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
end<br>
<br>
def display_article_list(articles)<br>
<span class="text-warning">&lt;html&gt;</span><br>
&lt;div class="articles-grid"&gt;<br>
&nbsp;&nbsp;#{articles.map { |article| article_card(article) }.join}<br>
&lt;/div&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
end<br>
<br>
def article_card(article)<br>
<span class="text-warning">&lt;html&gt;</span><br>
&lt;article class="article-card"&gt;<br>
&nbsp;&nbsp;&lt;h4&gt;#{article.title}&lt;/h4&gt;<br>
&nbsp;&nbsp;&lt;p&gt;#{article.excerpt}&lt;/p&gt;<br>
&nbsp;&nbsp;&lt;div class="meta"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;#{article.reading_time} min read&lt;/span&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;#{article.published_at.strftime("%b %d")}&lt;/span&gt;<br>
&nbsp;&nbsp;&lt;/div&gt;<br>
&lt;/article&gt;<br>
<span class="text-warning">&lt;/html&gt;</span><br>
end<br>
<span class="text-success">&lt;/transmuter&gt;</span>
            </code>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Logic Section -->
<!-- Business Logic Section -->
<section id="business-logic" class="mb-5">
  <h2 class="h3 fw-bold mb-4">Implement CDN</h2>
  
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-light">
      <h5 class="mb-0">
        <i class="bi bi-graph-up me-2"></i>
        Cdn links
      </h5>
    </div>
    <div class="card-body">
      <p class="card-text">Implement CDN</p>
      
      <div class="code-block bg-dark text-light p-3 rounded mb-4">
        <code class="text-light">
&lt;!-- Method 1: Using component includes --&gt;<br>
<span class="text-success">&lt;metadata html&gt;</span><br>
&lt;require file="shared/bootstrap/bs" /&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;bootstrap_css /&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;bootstrap_js /&gt;<br>
<span class="text-success">&lt;/metadata&gt;</span><br>
<br>
&lt;!-- Method 2: Direct CDN links --&gt;<br>


<span class="text-success">&lt;metadata html&gt;</span><br>
&lt;link href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"&gt;<br>
&lt;link rel="stylesheet" href="https://unpkg.com/bootstrap-icons@1.11.1/font/bootstrap-icons.css"&gt;<br>
&lt;script src="https://unpkg.com/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;<br>
<span class="text-success">&lt;/metadata&gt;</span><br>

        </code>
      </div>
    </div>
  </div>
</section>

    <!-- Navigation Helpers -->
    <div class="d-flex justify-content-between mt-5 pt-4 border-top">
      <router-link to="/getting-started/concepts" class="btn btn-outline-primary">
        <i class="bi bi-arrow-left me-2"></i>
        Back to Concepts
      </router-link>
      <router-link to="/getting-started/resources" class="btn btn-primary">
        Next: Resources
        <i class="bi bi-arrow-right ms-2"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.examples-page {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 1.5rem;
}

.code-block {
  font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

.code-block code {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
}

/* Text colors for syntax highlighting */
.text-success {
  color: #20c997 !important;
}

.text-warning {
  color: #ffc107 !important;
}

.text-info {
  color: #0dcaf0 !important;
}

/* Remove all centering - natural left alignment */
.page-header,
.card-body,
.card-text,
.code-block {
  text-align: left;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .d-flex.justify-content-between {
    flex-direction: column;
    gap: 1rem;
  }
  
  .d-flex.justify-content-between .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>