import { User } from '../entity/User';
import { Quote} from '../entity/Quote';
import { AppDataSource as dataSrc }  from '../data-source';
import { UserSex } from "../entity/enums"


const userData =  dataSrc.getRepository(User)

export const  startSeed = async ()=>{

    // const user = await userData.findBy({ id : 1})
    // console.log(user);

    const james = new User()
    james.firstName = "James"
    james.lastName = "Jordan"
    james.userName="forHimAndHis"
    james.dateOfBirth = new Date(1987,2,16)
    james.email = "jimijordan@gmail.com"
    // james.sex = UserSex.MALE;
   
    await userData.upsert(james,["userName"])
        
}


