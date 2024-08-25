
const User = require("../models/user-model");
const contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, {password: 0});
    //  console.log(users);
        if(!users || users.length === 0){
            return res.json({message: "No User Found"});
        }
        return res.json(users);
    } catch (error) {
        next(error);
    }
}

//****single user  logic */

const getUserById = async (req, res) => {
   try {
    const id = req.params.id;
   const data =  await User.findOne({_id: id}, {password: 0});
    return res.json(data);
   } catch (error) {
    next(error);
   }
}
//****delete user logic */

const deleteUserById = async (req, res) => {
   try {
    const id = req.params.id;
    await User.deleteOne({_id: id});
    return res.json({message: "User Deleted Successfully"});
   } catch (error) {
    next(error);
   }
}

//***Delete contact by id*** */

const deleteContactById = async (req, res) => {
   try {
    const id = req.params.id;
    await contact.deleteOne({_id: id});
    return res.json({message: "User Deleted Successfully"});
   } catch (error) {
    next(error);
   }
}

//****update single user data logic */

const updateUserById = async (req, res) => {
   try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedData = await User.updateOne({_id : id}, {
        $set: updateUserData,
    })
    return res.json(updatedData);
   } catch (error) {
    next(error);
   }
}



//**** this is a get all contacts logic */

const getAllContacts = async (req, res) => {
    try {
        const contacs = await contact.find();
        if(!contacs || contacs.length === 0){
            return res.json({message: "No User Found"});
        }
        return res.json(contacs);
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers, getAllContacts, deleteContactById, deleteUserById, getUserById, updateUserById};