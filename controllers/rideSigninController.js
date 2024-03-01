import rideUserModel from "../models/ForRideDetails.js"
const rideSigninController = async (req, res) => {
    try {
        let check = await rideUserModel.findOne({ email: req.body.email })
        if (check && check.Password == req.body.password) {
            res.render('home', {'title': 'Ride Dashboard' })           
        }
        else{
            res.send("Wrong password or user not found")
        }
        // console.log(check);
    } catch (error) {
        console.log(error);
    }
}
export { rideSigninController }