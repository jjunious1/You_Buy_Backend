# You_Buy_Backend

Created By: Kathya Castaneda, Sarah Duperoux, Christopher Yeom, Justin Junious

![YouBuy](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bettertechtips.com%2Fwp-content%2Fuploads%2F2016%2F08%2Febay.jpg&f=1&nofb=1&ipt=34abd74951e6b7ff5a5f04cb081f260b7b1ddb66efca0448db5cd8295e1c4657&ipo=images)

### **_Description_**

You Buy, not to be confused with Ebay. We are building an application reminiscint of Ebay but closer to craigslist. With this application you will have the ability to create a user and log in. View potential items for sale and sell items yourself.

You will also be able to create a wishlist of items you would like to purchase. Unlike EBAY you can not actually purchase here. You can connect with the seller to purchase using a traditional in person experience.

### **_Technologies Used_**

- React
- Postgres
- Sequelize
- Node.js
- Express.js
- Javascript
- Html
- Css

#### [Heroku Deployment](https://you-buyapp.herokuapp.com/)

#### **_ERD, CHD & Trello_**

We used this diagram as a reference to understand user experience and how the database would connect/flow.
Feel free to modify this and make your own.

[Hierarchy & ERD](https://lucid.app/lucidchart/b24131d0-e5ea-44fd-9942-bcbcc9305a70/edit?beaconFlowId=EB21F93B55BEAE44&invitationId=inv_bb135fe6-5ed3-4b21-9802-d3619f1585c2&page=0_0#)

Here is a link to our [Trello Board](https://trello.com/b/Z42jcobv/youbuycom-project). This is what we used to plan out how we will build this application.

### **_Getting Started_**

---

- Fork and Clone
- `npm install`
- `sequelize db:create`
- `sequelize db:migrate`
- `sequelize db:seed:all`
- `npm run dev`

### Middleware index.js

First store the `SALT_ROUNDS` and `APP_SECRET` variables to the `.env` file. Setting `SALT_ROUNDS` to 12 allows the hash to be extremely complex and touch to hack. The following functions are pretty straight-forward. The `hashPassword` function creates a hash password. The `comparePassword` function compares the `storedPassword` to the recieved password. After compaing passwords, we need to create a token. Hence the function, `createToken`. It simply creates a token. To verify the `JWT` tokens we created a function called `verifyToken` that essentially verifies the recieved token and if there is a match, then proceed. If there are no matches, then send an error message. The `stripToken` function is similar to the `verifyToken` but instead it `splits` the token to verify it.

---

### AuthController.js

This file allows users to `Register`, `Login`, and `updatePassword`. To further explain the `Login` function, it finds a user's email:

```
try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
```

if there is a match, then create a `payload` for the `JWT` token. Then the payload and the newley created token is sent back with a response.

### ProductsController.js

The `ProductsController.js` file allows developers to see all products as well as see just one product in detail. There are also functions created where developers can create a product and update a product.

### UserProductControllers.js

This file is important and it has similar functionalities as the `ProductsController.js` but this file allows users in the front-end to view products. As well as creating a product, updating a product, and deleting a product for signed in users.

### CommentsControllers.js

The `CommentsControllers.js` file allows all comments to be displayed on the user's profile page. The `CreateComments` cuntion is used for users to send messages to the seller of a certain product.

### Migrations

The files in the `migrations` folder shows all the attributes associated to each migration. For instance in the `create-user` migration file, it creates a table called `users` with attributes of id, name, email, and passwordDigest.

### Models

The most important aspect about the models folder are the associations. The user has a one to many association to products and comments. The products also has a one to many association to the comments. As reference to the `models/products.js`:

```
static associate(models) {
      Products.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'ownerId'
      })
      Products.hasMany(models.Comment, { foreignKey: 'productId' })
    }
```

The product belongs to a user through a foreignKey `ownerId`.

### Routes

The `authRouter.js` allows us to secure our data by protecting certain routes from unauthorized users. The `POST` route ensures that the users are authorized to submit new posts. After the path, we pass in the `stripToken` method

```
middleware.stripToken
```

If the request passes the first middleware, we add another middleware method called `verifyToken` to see if the token is legitimate and untampered. The other router files essentially connects the functions from the `Controllers` as well as defining what paths will be associated.

### Seeds

The seeder files essentially helped us build the base data for each table. It allows us to check if all CRUD functionality worked as well as the connection with the routes were successful.

### **_Future Updates_**

One future update we would like to work on is created a through table called Wishlist that will allow users on the front-end store products that they would like to purchase on a later date.
