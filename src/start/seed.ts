import { User } from "../entity/User";
import { Quote } from "../entity/Quote";
import { userQuoteEval } from "../entity/userQuoteEval"
import { AgreementStatus } from "../entity/enums";
import { AppDataSource as dataSrc } from "../data-source";
import { UserSex } from "../entity/enums";

const userData = dataSrc.getRepository(User);
const quoteData = dataSrc.getRepository(Quote);
const userQuoteEvalData = dataSrc.getRepository(userQuoteEval);

export const startSeed = async () => {


  const user1 = new User();
    user1.firstName = "James";
    user1.lastName = "Jordan";
    user1.userName = "forHimAndHis";
    user1.dateOfBirth = new Date(1987, 3, 16);
    user1.email = "jimijordan@gmail.com";
    await userData.upsert(user1, ["userName"]);

  const quote1 = new Quote();
    quote1.quotation = "The only thing we have to fear is fear itself.";
    quote1.tags = ["hero", "war", "history", "WWII"];
    quote1.source_details = {
      voicer: "Franklin Delano Roosevelt",
      source_type: "book",
      source_id: 1,
      source_specifics: { random_key: "random nice value!" },
      pct_attribution_confidence: 100
    };
    await quoteData.upsert(quote1, ["id"]);

    const userQuoteEval1 = new userQuoteEval();
      userQuoteEval1.user_id = 1;
      userQuoteEval1.quote_id = 1;
      userQuoteEval1.agreement = AgreementStatus.AGREE;
      userQuoteEval1.timestamp = new Date();
    await userQuoteEvalData.upsert(userQuoteEval1, ["id"]);


};
