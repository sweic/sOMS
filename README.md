<div align="center"><h1>sOMS</h1></div>
<div align="center"><h2>Modern B2C Order Management System</h2></div>
</br>
<div align="center"><img src="https://user-images.githubusercontent.com/101677551/176058931-b4edf31c-7511-46ec-936e-f0369965ca3a.png"/></div>
</br>
<h2>✅ Features:</h2>
<ul>
<li>CRUD customised menus with categories and food items. </li>
<li>Start/End service sessions with custom options. (e.g. No. of tables, last order time, menus)</li>
<li>Secure authentiation system for each customer table.</li>
<li>Display and modify realtime food stock availability to customers</li>
<li>Realtime management of kitchen orders and table bills.</li>
</ul>
</br>
<h2>📚 Development Stack:</h2>
<ul>
<li><a href="https://nodejs.org/en/">NodeJS</a></li>
<li><a href="https://www.typescriptlang.org/">Typescript</a></li>
<li><a href="https://reactjs.org/">React</a></li>
<li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
<li><a href="https://redis.io/">Redis</a></li>
<li><a href="https://www.apollographql.com/">Apollo GraphQL Client and Server</a></li>
<li><a href="https://typegraphql.com/">TypeGraphQL</a></li>
<li><a href="https://www.prisma.io/">Prisma2</a></li>
</ul>
</br>
<h2>🛠 Setting up development environment:</h2>
<ul>
<li>Install PostgreSQL and Redis on your machine.</li>
<li>Create a new psql database</li>
<li>Start machine's redis server</li>
<li><code>git clone https://github.com/sweic/sOMS.git</code></li>
<li>Fill up the <code>.env.example</code> file inside <code>/api</code> and rename to <code>.env</code></li>
<li><code>npm run install-dependencies</code></li>
<li><code>cd api</code> & <code>npm run install-dependencies</code></li>
<li><code>npm start</code> in both <code>root</code> and <code>/api</code></li>
<li>App should be running on <code>http://localhost:3000/</code></li>
<li>Navigate to <code>http://localhost:3000/auth</code></li>
<li>Enter USER_AUTH_TOKEN as in the <code>.env</code> file</li>
</ul>
</br>

<h2>❌ Constraints:</h2>
<ul>
<li>Admin interface and customer interface living on the same domain. Ideally would split them into two microservices living on different servers and clients.</li>
<li>Will be changing to AWS S3 for image hosting</li>
<li>Untested integration with shop's cashier system and thermal printers</li>
<li>Not stress tested</li>
</ul>

<h2>❓ Upcoming prioritised features</h2>
<ul>
<li>Admin able to update/delete orders that customers wrongly placed.</li>
<li>Custom options for each food item. (e.g. no spring onions)</li>
<li>Summary of past service sessions with data analysis on number of tables/orders and revenue each.</li>
</ul>
</br>
</br>
<div align="center"><h1>📷 Screenshots</h1></div>
</br>
<p>Creating/Editing menus, sections and food items.</p>
</br>
<table>
<tr>
<td><img  src="https://user-images.githubusercontent.com/101677551/175882217-51b09a80-a99c-4fbd-a065-7e71346983cf.png"/></td>
<td><img  src="https://user-images.githubusercontent.com/101677551/175883616-cb5f5b6e-e06b-465f-8c18-066759b9b273.png"/></td>
<td><img  src="https://user-images.githubusercontent.com/101677551/175883910-1133952c-d4af-4027-bb2b-89f36ce18b1f.png"/></td>
</tr>
</table>
</br>
</br>
</br>
<p>Admin's menu overview</p>
<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/101677551/175884857-22d9223f-efd5-416d-b9ad-01cf8ce7254d.png"/></td>
</tr>
</table>
</br>
</br>
<p>Creating a Service session</p>
<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/101677551/175891568-bd05cbe8-a0d7-4462-acf2-c21610ee6846.png"/></td>
</tr>
</table>
</br>
</br>
<p>Managing tables during service</p>
<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/101677551/175891584-9e1468e1-b2c1-4294-8a99-58df227da749.png"/></td>
<td><img src="https://user-images.githubusercontent.com/101677551/175891591-410fae3c-c008-4026-a045-51b5d4307a54.png"/></td>
</tr>
</table>
</br>
</br>
<p>Managing orders and bills</p>
<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/101677551/175894806-38b432a9-d37d-43bc-bc42-dff2c23f4878.png"/></td>
<td><img src="https://user-images.githubusercontent.com/101677551/175894797-9c2dda1d-23f4-4634-aaf4-bbc9e40ecda8.png"/></td>
</tr>
</table>
</br>
</br>
<p>Customer UX</p>
<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/101677551/175895535-df1e9318-c5f8-452e-bf75-cfff58db0479.png"/></td>
<td><img src="https://user-images.githubusercontent.com/101677551/175895523-954a7d3c-5843-48a9-8876-ce25e1d7b8f6.png"/></td>
</tr>
</table>
<table>
<tr>
<td><img src="https://user-images.githubusercontent.com/101677551/175894814-d0073fd1-764e-48a5-98c7-de217549d82f.png"/></td>
<td><img src="https://user-images.githubusercontent.com/101677551/175894810-ba20fa6a-2a9c-48e9-ac53-c334c4b805d6.png"/></td>
<td><img src="https://user-images.githubusercontent.com/101677551/175894809-f2925d3a-f6ff-47f3-9f07-7b14e267d0bc.png"/></td>
</tr>
</table>
