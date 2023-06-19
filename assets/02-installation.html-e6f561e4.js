import{_ as c,r as i,o as h,c as u,b as s,w as t,a as e,d as n,e as o}from"./app-515fa09f.js";const p={},b=e("h1",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),n(" Installation")],-1),v=e("h2",{id:"download-the-application-code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download-the-application-code","aria-hidden":"true"},"#"),n(" Download the application code")],-1),m=e("p",null,"Clone the repository using Git:",-1),g=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),n(` clone https://github.com/hkust-fyp-2022-kwt4/milestone.git
`)])])],-1),f=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),n(` clone git@github.com:hkust-fyp-2022-kwt4/milestone.git
`)])])],-1),_=o(`<h2 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install dependencies</h2><p>Run the following commands to install the dependencies:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">install</span>
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div><h2 id="build-front-end-assets" tabindex="-1"><a class="header-anchor" href="#build-front-end-assets" aria-hidden="true">#</a> Build front-end assets</h2><p>Run the following command to build the assets for the UIs:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p><code>dev</code> should also be used in production because the <code>prod</code> build causes problems.</p></div><h2 id="configure-web-server" tabindex="-1"><a class="header-anchor" href="#configure-web-server" aria-hidden="true">#</a> Configure web server</h2>`,8),w={href:"https://symfony.com/doc/current/setup/web_server_configuration.html",target:"_blank",rel:"noopener noreferrer"},y=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[n("After setting up the web server, make sure the "),e("code",null,"var"),n(" folder is writable by the web server's user (usually "),e("code",null,"www-data"),n(") as it is used to store logs and cached data.")])],-1),x=e("h3",{id:"apache",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#apache","aria-hidden":"true"},"#"),n(" Apache")],-1),k={href:"https://symfony.com/doc/current/setup/web_server_configuration.html#apache-with-php-fpm",target:"_blank",rel:"noopener noreferrer"},S=o(`<p>It is recommended to use the PHP-FPM module with Apache. Create a new virtual host with the following sample config (modify as needed):</p><div class="language-apache line-numbers-mode" data-ext="apache"><pre class="language-apache"><code>&lt;VirtualHost *:80&gt;
    ServerName domain.tld
    ServerAlias www.domain.tld

    # Uncomment the following line to force Apache to pass the Authorization
    # header to PHP: required for &quot;basic_auth&quot; under PHP-FPM and FastCGI
    #
    # SetEnvIfNoCase ^Authorization$ &quot;(.+)&quot; HTTP_AUTHORIZATION=$1

    # For Apache 2.4.9 or higher
    # Using SetHandler avoids issues with using ProxyPassMatch in combination
    # with mod_rewrite or mod_autoindex
    &lt;FilesMatch \\.php$&gt;
        SetHandler proxy:fcgi://127.0.0.1:9000
        # for Unix sockets, Apache 2.4.10 or higher
        # SetHandler proxy:unix:/path/to/fpm.sock|fcgi://dummy
    &lt;/FilesMatch&gt;

    # If you use Apache version below 2.4.9 you must consider update or use this instead
    # ProxyPassMatch ^/(.*\\.php(/.*)?)$ fcgi://127.0.0.1:9000/var/www/project/public/$1

    # If you run your Symfony application on a subpath of your document root, the
    # regular expression must be changed accordingly:
    # ProxyPassMatch ^/path-to-app/(.*\\.php(/.*)?)$ fcgi://127.0.0.1:9000/var/www/project/public/$1

    DocumentRoot /var/www/project/public
    &lt;Directory /var/www/project/public&gt;
        # enable the .htaccess rewrites
        AllowOverride All
        Require all granted
    &lt;/Directory&gt;

    # uncomment the following lines if you install assets as symlinks
    # or run into problems when compiling LESS/Sass/CoffeeScript assets
    # &lt;Directory /var/www/project&gt;
    #     Options FollowSymlinks
    # &lt;/Directory&gt;

    ErrorLog /var/log/apache2/project_error.log
    CustomLog /var/log/apache2/project_access.log combined
&lt;/VirtualHost&gt;
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">CAUTION</p><p>Note that only the <code>public/</code> folder is exposed. The source code root MUST NOT be exposed otherwise sensitive data will be leaked.</p><p>You should set up the website as a virtual host to ensure only the <code>public/</code> folder is accessible. Also set the <code>DocumentRoot</code> to the <code>public/</code> folder.</p></div><p>Ensure that the <code>mod_proxy</code> and <code>mod_proxy_fcgi</code> modules are installed and enabled in Apache.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>a2enmod proxy
a2enmod proxy_fcgi
</code></pre></div><h4 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite" aria-hidden="true">#</a> Rewrite</h4>`,6),A={href:"https://symfony.com/doc/current/setup/web_server_configuration.html#adding-rewrite-rules-for-apache",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"index.php",-1),P=e("code",null,"apache-pack",-1),C={href:"https://github.com/symfony/recipes-contrib/blob/main/symfony/apache-pack/1.0/public/.htaccess",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,".htaccess",-1),N=e("code",null,"public",-1),H=e("code",null,"AllowOverride",-1),M=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require symfony/apache-pack
</code></pre></div><p>Alternatively, you could copy the contents of the <code>.htaccess</code> file to the virtual host configuration (recommended for better performance).</p><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h3>`,3),R={href:"https://symfony.com/doc/current/setup/web_server_configuration.html#nginx",target:"_blank",rel:"noopener noreferrer"},O=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"CAUTION"),e("p",null,[n("Be careful to only expose the "),e("code",null,"public"),n(" folder.")])],-1),D=e("h2",{id:"create-database",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-database","aria-hidden":"true"},"#"),n(" Create database")],-1),E=e("p",null,"In this step, make sure a DBMS is installed and set up correctly, and create a user for the application (with appropriate permissions).",-1);function U(j,q){const r=i("CodeGroupItem"),l=i("CodeGroup"),a=i("ExternalLinkIcon"),d=i("RouterLink");return h(),u("div",null,[b,v,m,s(l,null,{default:t(()=>[s(r,{title:"HTTPS"},{default:t(()=>[g]),_:1}),s(r,{title:"SSH"},{default:t(()=>[f]),_:1})]),_:1}),_,e("p",null,[n("If using the system for production, a web server should be configured to serve the website. This documentation provides guidance for Nginx and Apache (adapted from "),e("a",w,[n("Symfony docs"),s(a)]),n(").")]),y,x,e("p",null,[e("a",k,[n("Symfony docs"),s(a)]),n(".")]),S,e("p",null,[e("a",A,[n("Symfony docs"),s(a)]),n(".")]),e("p",null,[n("Some rewrite rules are also needed to redirect users to "),I,n(". You could install Symfony's "),P,n(" which will place "),e("a",C,[n("this "),T,n(" file"),s(a)]),n(" inside the "),N,n(" directory. Make sure the "),H,n(" directive of the virtual host is enabled.")]),M,e("p",null,[n("Refer to the "),e("a",R,[n("Symfony docs"),s(a)]),n(".")]),O,D,e("p",null,[n("A database management system should be prepared for the website. The database will be created in the "),s(d,{to:"/setup/03-configuration.html"},{default:t(()=>[n("configuration")]),_:1}),n(" step.")]),E])}const L=c(p,[["render",U],["__file","02-installation.html.vue"]]);export{L as default};