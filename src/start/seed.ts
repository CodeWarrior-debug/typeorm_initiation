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

  // *****************USERS*****************

  const user1 = new User();
    user1.firstName = "James";
    user1.lastName = "Jordan";
    user1.userName = "forHimAndHis";
    user1.dateOfBirth = new Date(1987, 3, 16);
    user1.email = "jimijordan@gmail.com";
    await userData.upsert(user1, ["userName"]);

  const user2 = new User();
    user2.firstName = "Friedrich";
    user2.lastName = "Nietzsche";
    user2.userName = "deadGoddeadGuy";
    user2.dateOfBirth = new Date(1844, 10, 15);
    user2.email = "deceasedGerman@gmail.com";
    await userData.upsert(user2, ["userName"]);

    // *****************QUOTES*****************

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
    
    const quote2 = new Quote();
    quote2.quotation = "God is dead.";
    quote2.tags = ["atheism"];
    quote2.source_details = {
      voicer: "Friedrich Nietzsche",
      source_type: "book",
      source_id: 2,
      source_specifics: { random_key: "random nice value!" },
      pct_attribution_confidence: 100
    };
    await quoteData.upsert(quote2, ["id"]);

    // *****************UQ PERSPECTIVES*****************

    const userQuoteEval1 = new userQuoteEval();
      userQuoteEval1.user_id = 1;
      userQuoteEval1.quote_id = 1;
      userQuoteEval1.agreement = AgreementStatus.AGREE;
      userQuoteEval1.timestamp = new Date();
    await userQuoteEvalData.upsert(userQuoteEval1, ["id"]);



    const userQuoteEval2 = new userQuoteEval();
      userQuoteEval2.user_id = 2;
      userQuoteEval2.quote_id = 2;
      userQuoteEval2.agreement = AgreementStatus.AGREE;
      userQuoteEval2.timestamp = new Date();
    await userQuoteEvalData.upsert(userQuoteEval2, ["id"]);

    const userQuoteEval3 = new userQuoteEval();
    userQuoteEval3.user_id = 1;
    userQuoteEval3.quote_id = 2;
    userQuoteEval3.agreement = AgreementStatus.DISAGREE;
    userQuoteEval3.timestamp = new Date();
  await userQuoteEvalData.upsert(userQuoteEval3, ["id"]);


};
