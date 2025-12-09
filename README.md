#typescript
It is just a tool to look upon the data types in js.

##How to install typescript in any project?
npm i --save-dev typescript -> this install typescript and good to go with basic js

but when you work in node env and there some features that are node specific like reading files using 'fs' module then typescript 
doesn't know node's type then we install node/react/express/next.js types so that our typescript knows these types as well.


but by doing so, I've installed typescript compiler but it is not in the use, right? because npm installs something not execute it. So, it is in my dir but to use it, I need to configure it or run it directly.

npx tsx --init -> initializes tsc compiler in my project, so whenever i need to run ts file, simply I'll go with this person and say to run my .ts file.
# ts
