const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
   
    const { sortBy, order = 'asc' } = req.query;
    const sort = {};
    if (sortBy) {
      sort[sortBy] = order === 'desc' ? -1 : 1; 
    }

    const allUsers = await User.find().sort(sort);
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getUserById = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user)
    }catch(err){
        console.log(err);
        res.status(500).send('Error in getting user by id')
        
    }
}

exports.createUsers = async (req, res) => {
  const createUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });

  try {
    const user = await createUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteUser = async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({id: req.params.id});
    } catch(err){
        console.log(err);
        res.status(500).send("Error in deleting user");
        
    }
};

exports.updateUser = async(req,res)=>{
    try{
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id:req.params.id});
    } catch(err){
        console.log(err);
        res.status(500).send("Error in updating user");
    }
};

exports.updateUserPatch  = async(req,res)=>{
    try{
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.json({ id:req.params.id});
    } catch(err){
        console.log(err);
        res.status(500).send("Error in updating user");
    }
}
