(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{1140:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},624:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(1140)),i={slug:"mikro-orm-3-released",title:"MikroORM 3: Knex.js, CLI, Schema Updates, Entity Generator and\xa0more\u2026",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},s={permalink:"/blog/mikro-orm-3-released",source:"@site/blog/2020-01-16-mikro-orm-3-released.md",description:"New major version of the TypeScript ORM has been released, read about its new features and breaking changes.",date:"2020-01-16T00:00:00.000Z",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"sql",permalink:"/blog/tags/sql"}],title:"MikroORM 3: Knex.js, CLI, Schema Updates, Entity Generator and\xa0more\u2026",readingTime:10.52,truncated:!0,prevItem:{title:"MikroORM 4: Filling the Gaps",permalink:"/blog/mikro-orm-4-released"},nextItem:{title:"Handling Transactions and Concurrency in MikroORM",permalink:"/blog/handling-transactions-and-concurrency-in-mikroorm"}},l=[{value:"In case you don\u2019t know\u2026",id:"in-case-you-dont-know",children:[]},{value:"Integrated Knex.js",id:"integrated-knexjs",children:[]},{value:"Simplified Entity Definition",id:"simplified-entity-definition",children:[]},{value:"Nested Queries",id:"nested-queries",children:[]},{value:"Strict Typing of Queries",id:"strict-typing-of-queries",children:[]},{value:"Improved Schema Generator",id:"improved-schema-generator",children:[]},{value:"Migrations",id:"migrations",children:[]},{value:"Generating Entities from Current Database",id:"generating-entities-from-current-database",children:[]},{value:"CLI",id:"cli",children:[]},{value:"Custom Mapping Types",id:"custom-mapping-types",children:[]},{value:"And Many More\u2026",id:"and-many-more",children:[]},{value:"Notable Breaking Changes",id:"notable-breaking-changes",children:[]},{value:"Making it a bit more Professional\u2026",id:"making-it-a-bit-more-professional",children:[]},{value:"What\u2019s next?",id:"whats-next",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"New major version of the TypeScript ORM has been released, read about its new features and breaking changes."),Object(o.b)("h3",{id:"in-case-you-dont-know"},"In case you don\u2019t know\u2026"),Object(o.b)("p",null,"If you never heard of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),"MikroORM"),", it\u2019s a TypeScript data-mapper ORM with Unit of Work and Identity Map. It supports MongoDB, MySQL, PostgreSQL and SQLite drivers currently. Key features of the ORM are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mikro-orm/mikro-orm#implicit-transactions"}),"Implicit transactions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mikro-orm/mikro-orm#changeset-based-persistence"}),"ChangeSet based persistence")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/identity-map/"}),"Identity map"))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1024/0*0eZmw4DceSltEEQh.png",alt:null}))),Object(o.b)("p",null,"You can read the full ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/dailyjs/introducing-mikro-orm-typescript-data-mapper-orm-with-identity-map-9ba58d049e02"}),"introductory article here")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io"}),"browse through the docs"),"."),Object(o.b)("h3",{id:"integrated-knexjs"},"Integrated Knex.js"),Object(o.b)("p",null,"You probably know Knex.js already, but if you don\u2019t, it is a \u201cbatteries included\u201d SQL query builder for ",Object(o.b)("strong",{parentName:"p"},"Postgres")," , ",Object(o.b)("strong",{parentName:"p"},"MSSQL")," , ",Object(o.b)("strong",{parentName:"p"},"MySQL")," , ",Object(o.b)("strong",{parentName:"p"},"MariaDB")," , ",Object(o.b)("strong",{parentName:"p"},"SQLite3")," , ",Object(o.b)("strong",{parentName:"p"},"Oracle")," , and ",Object(o.b)("strong",{parentName:"p"},"Amazon Redshift")," designed to be flexible, portable, and fun to use."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/649/0*FHWIwC9WTwl2hkQ7.png",alt:null}))),Object(o.b)("p",null,"Knex.js is now used as both a query builder and a query runner for all SQL drivers. This allows to simplify SQL driver implementations as well as brings some new possibilities."),Object(o.b)("h4",{id:"using-knexjs"},"Using Knex.js"),Object(o.b)("p",null,"You can access configured knex instance via qb.getKnexQuery() method. Then you can execute it via the Connection.execute() and map the results via EntityManager.map()."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\nconst knex = qb.getKnexQuery(); // instance of Knex' QueryBuilder\n// do what ever you need with `knex`\nconst res = await orm.em.getConnection().execute(knex);\nconst entities = res.map(a => orm.em.map(Author, a));\nconsole.log(entities); // Author[]\n")),Object(o.b)("p",null,"You can also get clear and configured knex instance from the connection via getKnex() method. As this method is not available on the base Connection class, you will need to either manually type cast the connection to AbstractSqlConnection (or the actual implementation you are using, e.g. MySqlConnection), or provide correct driver type hint to your EntityManager instance, which will be then automatically inferred in em.getConnection() method."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Driver and connection implementations are not directly exported from mikro-orm module. You can import them from mikro-orm/dist (e.g. import { PostgreSqlDriver } from 'mikro-orm/dist/drivers/PostgreSqlDriver').")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const conn = orm.em.getConnection() as AbstractSqlConnection;\n// you can make sure the `em` is correctly typed to `EntityManager<AbstractSqlDriver>`\n// or one of its implementations:\n// const em: EntityManager<AbstractSqlDriver> = orm.em;\nconst knex = conn.getKnex();\n// do what ever you need with `knex`\nconst res = await knex;\n")),Object(o.b)("h4",{id:"connection-pooling"},"Connection Pooling"),Object(o.b)("p",null,"With Knex.js used as a query runner, support for connection pooling is finally available. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/vincit/tarn.js"}),"Tarn.js")," is used for this internally, using connection pool with min: 2, max: 10 for the MySQL and PG libraries, and a single connection for sqlite3 by default. Use pool option to change this when initializing the ORM."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entities: [Author, Book],\n  dbName: 'my-db-name',\n  pool: { min: 10, max: 20 }, // see https://github.com/vincit/tarn.js#usage for other pool options\n});\n")),Object(o.b)("h4",{id:"more-sql-drivers"},"More SQL Drivers?"),Object(o.b)("p",null,"One of the strongest reasons to integrate Knex.js was that it allows to simplify and unify SQL drivers and opens doors for implementing new SQL drivers. Knex.js currently supports (apart from those currently supported by MikroORM): MSSQL, Oracle and Amazon Redshift."),Object(o.b)("p",null,"Thanks to AbstractSqlDriver and AbstractSqlConnection classes it should be fairly simple to implement them. I am open for PRs for those drivers, as I would like to focus on developing new ORM features mainly, instead of learning new SQL dialects I have never used. I will be happy to assist to anybody interested\u200a\u2014\u200afeel free to reach me out either via Slack, email or GitHub issues."),Object(o.b)("h3",{id:"simplified-entity-definition"},"Simplified Entity Definition"),Object(o.b)("p",null,"Now it is no longer needed to merge entities with IEntity interface, that was polluting entity's interface with internal methods. New interfaces IdentifiedEntity\\<T",">",", UuidEntity\\<T",">"," and MongoEntity\\<T",">"," are introduced, that should be implemented by entities. They are not adding any new properties or methods, keeping the entity's interface clean."),Object(o.b)("p",null,"IEntity interface has been renamed to AnyEntity\\<T, PK",">"," and it no longer has public methods like toJSON(), toObject() or init(). One can use wrap() method provided by ORM that will enhance property type when needed with those methods (e.g. await wrap(book.author).init()). To keep all methods available on the entity, you can still use interface merging with WrappedEntity\\<T, PK",">"," that both extends AnyEntity\\<T, PK",">"," and defines all those methods."),Object(o.b)("p",null,"You will need to mark the entity by implementing one of ","*","Entity interfaces:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"IdEntity\\<T",">"," for numeric/string PK on id property (id: number)"),Object(o.b)("li",{parentName:"ul"},"UuidEntity\\<T",">"," for string PK on uuid property (uuid: string)"),Object(o.b)("li",{parentName:"ul"},"MongoEntity\\<T",">"," for mongo, where id: string and ","_","id: ObjectId are required"),Object(o.b)("li",{parentName:"ul"},"AnyEntity\\<T, PK",">"," for other possible properties (fill the PK property name to PK parameter, e.g.: AnyEntity\\<Book, 'myPrimaryProperty'",">","')")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class User implements IdEntity<User> {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @OneToOne()\n  address?: Address;\n\n  @ManyToMany()\n  cars = new Collection<Car>(this);\n\n  constructor(name: string) {\n    this.name = name;\n  }\n\n}\n")),Object(o.b)("p",null,"To keep all public methods that were part of IEntity interface in v2, you can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/defining-entities#using-wrappedentity-interface"}),"WrappedEntity\\<T, PK",">"," via interface merging"),"."),Object(o.b)("h3",{id:"nested-queries"},"Nested Queries"),Object(o.b)("p",null,"SQL driver now support nested where and orderBy conditions. This means that you can query by properties of a relationship and the relation will be automatically joined for you. They are available both in EntityManager and QueryBuilder APIs."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const book = await orm.em.findOne(Book, {\n  author: {\n    name: 'Jon Snow',\n    address: {\n      street: 'Downing Street',\n    },\n  },\n}, ['author.address']);\n\nconsole.log(book.author.name); // 'Jon Snow'\nconsole.log(book.author.address.street); // 'Downing Street'\n")),Object(o.b)("h3",{id:"strict-typing-of-queries"},"Strict Typing of Queries"),Object(o.b)("p",null,"Previously the where parameter of EntityManager\u2019s find methods (find(), findOne(), count()) was weakly typed. It allowed users to pass pretty much anything there."),Object(o.b)("p",null,"Now the query is strictly typed, only entity properties and operators can be used and the type of property value is also checked."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// correct query\nem.find(Author, {\n  favouriteBook: {\n    author: { name: '...' },\n  },\n  age: { $gte: 40 }, // operators are also supported\n});\n\n// 2 errors will be reported here\nem.find(Author, {\n  favouriteBook: {\n    author: { born: 'test' }, // string instead of Date\n  },\n  age: { $lte: 'nan' }, // string instead of number\n});\n")),Object(o.b)("h3",{id:"improved-schema-generator"},"Improved Schema Generator"),Object(o.b)("p",null,"SchemaGenerator now supports creating, updating and dropping the schema. You can either get the SQL queries as array of strings or directly run them on the database."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Always check the generated SQL first before running it.")),Object(o.b)("p",null,"There is also new columnType property attribute you can use to specify the database specific column type explicitly."),Object(o.b)("h3",{id:"migrations"},"Migrations"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/628/0*b3RWZY_ROCrJs3RE.jpeg",alt:null}))),Object(o.b)("p",null,"Better way to handle schema updates than using the SchemaGenerator directly is to use Migrations. MikroORM 3 has ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/migrations"}),"integrated support for migrations")," via ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sequelize/umzug"}),"umzug"),". It allows you to generate migrations with current schema differences."),Object(o.b)("p",null,"By default, each migration will be all executed inside a transaction, and all of them will be wrapped in one master transaction, so if one of them fails, everything will be rolled back."),Object(o.b)("h3",{id:"generating-entities-from-current-database"},"Generating Entities from Current Database"),Object(o.b)("p",null,"As a counterpart to the SchemaGenerator that propagates changes in your entities to the database schema, there is now ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/entity-generator"}),"EntityGenerator")," to help you with reverse engineering current database schema and creating entities based on it."),Object(o.b)("p",null,"It supports basic entity definition including ManyToOne and OneToOne relationships. Currently ManyToMany will be generated as additional entity with two ManyToOne relations and you will need to refactor this yourself."),Object(o.b)("p",null,"While it can help a lot, there is quite a lot of room for improvement. In future I would like to implement proper support for ManyToMany relations as well for enums and indexes. Another possible extension would be to allow editing existing entities (syncing them with current schema)."),Object(o.b)("h3",{id:"cli"},"CLI"),Object(o.b)("p",null,"While you can use SchemaGenerator and EntityGenerator manually, much easier way is to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/installation#setting-up-the-commandline-tool"}),"new CLI tool"),". Simply create configuration file in root directory or add its path to package.json. TypeScript files are also supported via ts-node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "your-app",\n  "dependencies": { ... },\n  "mikro-orm": {\n    "useTsNode": true,\n    "configPaths": [\n      "./src/mikro-orm.config.ts",\n      "./dist/mikro-orm.config.js"\n    ]\n  }\n}\n')),Object(o.b)("p",null,"Now you can use the CLI with help of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/npm/npx"}),"npx"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ npx mikro-orm\nUsage: mikro-orm <command> [options]\n\nCommands:\n  mikro-orm cache:clear             Clear metadata cache\n  mikro-orm cache:generate          Generate metadata cache for production\n  mikro-orm generate-entities       Generate entities based on current database\n                                    schema\n  mikro-orm database:import <file>  Imports the SQL file to the database\n  mikro-orm schema:create           Create database schema based on current\n                                    metadata\n  mikro-orm schema:drop             Drop database schema based on current\n                                    metadata\n  mikro-orm schema:update           Update database schema based on current\n                                    metadata\n  mikro-orm migration:create        Create new migration with current schema\n                                    diff\n  mikro-orm migration:up            Migrate up to the latest version\n  mikro-orm migration:down          Migrate one step down\n  mikro-orm migration:list          List all executed migrations\n  mikro-orm migration:pending       List all pending migrations\n  mikro-orm debug                   Debug CLI configuration\n\nOptions:\n  -v, --version  Show version number                                   [boolean]\n  -h, --help     Show help                                             [boolean]\n\nExamples:\n  mikro-orm schema:update --run  Runs schema synchronization\n")),Object(o.b)("p",null,"To verify your setup, you can use the mikro-orm debug command. Once you have it configured properly, you can also re-use it when initializing the ORM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"// when no options parameter is provided, CLI config will be used\nconst orm = await MikroORM.init();\n")),Object(o.b)("h3",{id:"custom-mapping-types"},"Custom Mapping Types"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/500/0*zAn0BtH_iz7b8Ywj.jpg",alt:null}))),Object(o.b)("p",null,"With ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/custom-types/"}),"Custom Types")," we can now enhance how the database value will be represented in the ORM. You can define custom types by extending Type abstract class, it has 4 optional methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"convertToDatabaseValue(value: any, platform: Platform): any")),Object(o.b)("p",null,"Converts a value from its JS representation to its database representation of this type. By default returns unchanged value."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"convertToJSValue(value: any, platform: Platform): any")),Object(o.b)("p",null,"Converts a value from its database representation to its JS representation of this type. By default returns unchanged value."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"toJSON(value: any, platform: Platform): any")),Object(o.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type. By default converts to the database value."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"getColumnType(prop: EntityProperty, platform: Platform): string")),Object(o.b)("p",null,"Gets the SQL declaration snippet for a field of this type. By default returns columnType of given property."),Object(o.b)("p",null,"Here is a simplified version of DateType that is already present in the ORM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Type, Platform, EntityProperty, ValidationError } from 'mikro-orm';\n\nexport class DateType extends Type {\n\n  convertToDatabaseValue(value: any, platform: Platform): any {\n    return value.toISOString().substr(0, 10);\n  }\n\n  convertToJSValue(value: any, platform: Platform): any {\n    return new Date(value);\n  }\n\n  getColumnType(): string {\n    return 'date';\n  }\n\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class FooBar implements IdEntity<FooBar> {\n  \n  @PrimaryKey()\n  id!: number;\n  \n  @Property({ type: DateType })\n  born?: Date;\n\n}\n")),Object(o.b)("h3",{id:"and-many-more"},"And Many More\u2026"),Object(o.b)("p",null,"There are many more new features, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/master/CHANGELOG.md"}),"changelog")," to read the full list. Here are few of them worth mentioning:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/entity-references/"}),"Improved support for References")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/defining-entities/#enums"}),"Navite Enum support")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/entity-manager#fetching-paginated-results"}),"em.findAndCount()")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/entity-manager#handling-not-found-entities"}),"em.findOneOrFail()")," methods"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/metadata-providers/#reflectmetadataprovider"}),"ReflectMetadataProvider")," as a fast alternative to ts-morph reflection"),Object(o.b)("li",{parentName:"ul"},"Improved logging with query highlighting"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/deployment/#deploy-a-bundle-of-entities-and-dependencies-with-webpack"}),"Support for bundling via Webpack")),Object(o.b)("li",{parentName:"ul"},"Eager loading"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/read-connections"}),"Read Connections")),Object(o.b)("li",{parentName:"ul"},"More strict entity definition validation")),Object(o.b)("h3",{id:"notable-breaking-changes"},"Notable Breaking Changes"),Object(o.b)("p",null,"Here is a short list of breaking changes. You can see the full list in the docs: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/docs/upgrading-v2-to-v3/"}),"https://mikro-orm.io/docs/upgrading-v2-to-v3/"),"."),Object(o.b)("h4",{id:"auto-flushing-disabled-by-default"},"Auto-flushing Disabled by Default"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"If you had")," ",Object(o.b)("em",{parentName:"p"},"autoFlush: false in your ORM configuration before, you can now remove this line, no changes are needed in your app."))),Object(o.b)("p",null,"Default value for autoFlush is now false. That means you need to call em.flush() yourself to persist changes into database. You can still change this via ORM's options to ease the transition but generally it is not recommended as it can cause unwanted small transactions being created around each persist."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"orm.em.persist(new Entity()); // no auto-flushing by default\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),Object(o.b)("h4",{id:"transactions-api"},"Transactions API"),Object(o.b)("p",null,"Transactions now require using em.transactional() method, previous methods beginTransaction/commit/rollback are now removed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await orm.em.transactional(async _em => {\n  //... do some work\n  const user = new User(...);\n  user.name = 'George';\n  _em.persistLater(user);\n});\n")),Object(o.b)("h3",{id:"making-it-a-bit-more-professional"},"Making it a bit more Professional\u2026"),Object(o.b)("p",null,"Not a big deal, but probably worth mentioning\u200a\u2014\u200aMikroORM\u2019s repository has been transferred to new ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm"}),"MikroORM GitHub Organization")," and the website is now moved to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io"}),"mikro-orm.io"),". Old links should be properly redirected, if you find some 404, please let me know thru GitHub issues!"),Object(o.b)("p",null,"Website has also been redesigned\u200a\u2014\u200anow it is built with Docusaurus (v2) and provides fulltext search by Algolia. The docs are now also ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/versions"}),"versioned"),"."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io"}),"Check it out!")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1024/1*2pdwLgyPZNltJQ_2j8poSQ.png",alt:null}))),Object(o.b)("h3",{id:"whats-next"},"What\u2019s next?"),Object(o.b)("p",null,"Here are some features I am planning to work in the near future:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Composite primary keys"),Object(o.b)("li",{parentName:"ul"},"Transactions in MongoDB"),Object(o.b)("li",{parentName:"ul"},"Complex hydration of joined result sets"),Object(o.b)("li",{parentName:"ul"},"Slow query log"),Object(o.b)("li",{parentName:"ul"},"M:N support in entity generator")),Object(o.b)("p",null,"There are also some interesting suggestion in the Github issues, like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/issues/266"}),"Dataloader integration"),"."),Object(o.b)("h4",{id:"wdyt"},"WDYT?"),Object(o.b)("p",null,"So that is MikroORM 3, what do you think about it? What features or changes would you like to see next? Or what part of the documentation should be improved and how?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Like")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io"}),Object(o.b)("em",{parentName:"a"},"MikroORM")),Object(o.b)("em",{parentName:"p"},"? \u2b50\ufe0f")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),Object(o.b)("em",{parentName:"a"},"Star it"))," ",Object(o.b)("em",{parentName:"p"},"on GitHub and share this article with your friends."))),Object(o.b)("hr",null))}p.isMDXComponent=!0}}]);