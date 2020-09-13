## Model for Backend Project with Node, TypeScript and TypeORM

First - Uncomment the line .env line in the file .gitignore, this is to development

Second - Rename Field Name in package.json and choice pg or mysql (default pg):
`"pg": "^8.2.1",` or `"mysql: ^2.18.1"`
If it's mysql, also configure the ormconfig.js and .env files

Third - Edit .env file with your data from database

Fourth - Remove directory .git

Fifth - Run to create directories:
`mkdir src/repositories src/entities src/database/migrations`

Sixth - Run to Dev:
`yarn && yarn dev`
