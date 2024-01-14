import { getAllMembers } from "../DAL/membersWS.js";
import Member from "../models/memberModel.js";

const saveAllToDB = async () => {
    const data = await getAllMembers();
    const members = data.map(member => ({
        "name" : member.name,
        "email" : member.email,
        "city": member.address.city
    }))

    const result = await Member.create(members);   
    console.log('Members saved to the database:', result);

    return members;
}


const getAll = async () => {
//    await saveAllToDB();
   const allMembers = await Member.find();
   return allMembers;
}

export { getAll }