import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Quote } from "./entity/Quote"
import { UserSex } from "./entity/enums"
import { startSeed } from "./start/seed"

AppDataSource.initialize().then(async () => {

    // console.log('about to... ');

    await startSeed();

    
    //     const user = new User()
    //         user.firstName = "Johnny"
    //         user.lastName = "Appleseed"
    //         user.userName="theSeedingMan"
    //         user.dateOfBirth = new Date(1774,10,26)
    //         user.email = "seedingman@gmail.com"
    //         user.sex = UserSex.MALE;
    //     await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    

    // console.log('about to... sync quote');
        
        // const quote = new Quote()
            // quote.quotation = "The only thing we have to fear is fear itself."
            // quote.tags = ['hero', 'war', 'history' , 'WWII']
            // quote.agree = true;
            // quote.source_details = {
            //     voicer: 'Franklin Delano Roosevelt',
            //     source_type: 'book',
            //     pct_attribution_confidence: 100,
            //     source_specifics: {my_object: 'looks so nice!'}
            // }
        // await AppDataSource.manager.save(quote)


    // console.log('about to...run find user queries ');

        // console.log("Loading users from the database...")
        // const users = await AppDataSource.manager.find(User)
        // const users = await AppDataSource.manager.find(User); console.log("Loaded users: ", users);
        // console.log("The current number of users is: ", await AppDataSource.manager.count(User), "I am expecting it will be 2")
        // console.log("The connection we have is: ", AppDataSource.manager.connection)
        // console.log("The average age of our users is: ",  await AppDataSource.manager.average(User,'age'))
        // console.log("If we end up with a new Users2 table including what we had in User table, it succeeds! : ", await AppDataSource.manager.create("Users2"))
        // const johnnyReturns = await AppDataSource.manager
        // .createQueryBuilder(User,"user")
        // .where("user.firstName = :firstName", { firstName: "Johnny"})
        // .getMany();
        // const franklinQuote = await AppDataSource.manager
        // .createQueryBuilder(Quote,'quote')
        // .relation(Quote, "agree")
        // .of(id)
        // .loadMany();
    
            //   console.log("finding 'Johnny'",  johnnyReturns)
            //   console.log("FDR quote details",  franklinQuote)

    // console.log('about to...run delete user query ');
    
        // await AppDataSource.manager
        //     .createQueryBuilder()
        //     .delete()
        //     .from(User)
        //     .where("firstName = :firstName", { firstName: "Johnny"})
        //     .execute()

        // await AppDataSource.manager.delete(User,"user");

    // TODO: try out AppDataSource.manager.countBy
    // TODO: try out query builder with DataSource
    // TODO: try out decrement
    // TODO: verify this works - AppDataSource.manager.create(User) 
    // TODO - figure out relation query builder
    // TODO: try out express and/or fastify
    // console.log("Here you can setup and run express / fastify / any other framework.")

    // const testQuery = await AppDataSource.manager
    //     .createQueryBuilder(Quote,"quote")
    //     .where("quote.quotation = :quotation", { quotation: "The only thing we have to fear is fear itself."})
    //     // .stream()
    //     .getOne();

    //     console.log("testQuery: ", testQuery.source_details.voicer);


}).catch(error => console.log(error))
