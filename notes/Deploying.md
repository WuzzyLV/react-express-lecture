1. Add dns record - [Name.com](https://www.name.com/account/domain/details/wuzzy.software#dns)
2. `/var/www`
3. git clone 
4. `git switch` to real branch
5. npm run build
6. copy dist folder path
7. npm i, backend
9. `pm2 start ... --name "lecture-backend"`
10. add .env
11. create nginx config  /etc/nginx/sites-available
12. Config 
``` toml
server {
    listen 80;
    server_name XXXXXXXXXXXXXXXXX.com;

    location / {
        root /var/www/XXXXXXXXXXXXXXXXXXXX/frontend/dist;
        index index.html;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:XXXXXXXXXXXXXXXXXXXXXX/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    error_page 404 /index.html;
}
```
12. create shortcut `sudo ln -s /etc/nginx/sites-available/XXXXXX /etc/nginx/sites-enabled/`
13. `sudo nginx -t`
14. `sudo systemctl restart nginx`
15. `sudo certbot --nginx -d lecture1.wuzzy.software 
16. 
/var/www/react-express-lecture/frontend/dist