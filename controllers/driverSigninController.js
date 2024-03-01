import userModel from "../models/ForDriverDetails.js"
const driverSigninController = async (req, res) => {
    try {
    let check = await userModel.findOne({ email: req.body.email })

        if (check && check.Password == req.body.password) {
            res.render('home', {'title': 'Drive Dashboard'})

        }
        else {
            res.send("Wrong password or user not found");
        }
        // console.log(check);
    }
    catch (error) {
        console.log(error);
    }
}
export { driverSigninController }