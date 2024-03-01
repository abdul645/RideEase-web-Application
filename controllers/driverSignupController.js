import userModel from "../models/ForDriverDetails.js"

const driverSignupController = async (req, res) => {
    try {

        console.log('Received data:', req.body);
        // Destructure the data from the request body
        const { FName, LName, UserName, email, CNumber, Password, CPassword } = req.body
        // const imageBuffer = req.file.buffer

        // Creating a new instance of  model
        const doc = new userModel({
            FirstName: FName,
            LastName: LName,
            UserName: UserName,
            email: email,
            ContactNumber: CNumber,
            Image: req.file.filename,
            Password: Password,
            ConfirmPassword: CPassword
        })
        // Save the data to the database
        const result = await doc.save()
        console.log("succesfully created");
        console.log(result);
        res.redirect('/');
        
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export { driverSignupController }



