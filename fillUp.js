const {faker} = require("@faker-js/faker")
const {MongoClient} =require("mongodb")
const _ = require("lodash")

require("dotenv").config()

async function main(){
    const url = process.env.MONGO_URL;
    const client = new MongoClient(url);

    try{
        await client.connect()

        const productCollection = client.db("Chicken").collection("products")
        const categoriesSchema = client.db("Chicken").collection("Categories")

        await productCollection.drop();
        let categories = ['breakfast','lunch','dinner','drinks'].map((category)=>{
            return {name:category};
        })
        await categoriesSchema.insertMany(categories);

        let imageUrls = [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wyUFOFsj0OdRY1sZyjhd0wHaFj%26pid%3DApi&f=1&ipt=6310c8b5b6abec6e47cb8ebff9725de439df1bdbc23da181e1d6865dcd98cf43&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oIKf-fi9X25RuHcoaDsweQHaE8%26pid%3DApi&f=1&ipt=0d0b90928c4e91922f58595b65d893d1b4d821a3c50ac358acc864171abfcb90&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oIKf-fi9X25RuHcoaDsweQHaE8%26pid%3DApi&f=1&ipt=0d0b90928c4e91922f58595b65d893d1b4d821a3c50ac358acc864171abfcb90&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ex7pCtVMR3yt1Ng5v8IqHgHaE8%26pid%3DApi&f=1&ipt=19408b4f137751751dd5b03dc50a9e546cc17e06ef7dabc6fe716cbc3b04c97b&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.Nj6zlrdXZT0ETdCu4Z838QHaLH%26pid%3DApi&f=1&ipt=05ad5e95cd96787b0d5890d152c81f5daf269147e92dbe3ea26b4243fb271204&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kp4sOWv1rDykKjM2XQLOuwHaE8%26pid%3DApi&f=1&ipt=1c8fc5dc548fb1ece780fba5e2b85fb7b8f3073cd5a4efce37552dc1547af985&ipo=images",   
        ]

        let product = [];
        for(let i=0;i<10;i+=1){
            let newProduct = {
                name:faker.animal.lion(),
                adjective:faker.commerce.productAdjective(),
                description:faker.commerce.productDescription(),
                price:faker.commerce.price(),
                category:_.sample(categories),
                imageUrl:_.sample(imageUrls),
            }
            product.push(newProduct)
            console.log("Product Pushed: ",newProduct);
        }
        await productCollection.insertMany(product);
        console.log("Products inserted successfully");
    }catch(error){console.log("Error: ",error)}
    finally{
        await client.close()
    }
}

main();