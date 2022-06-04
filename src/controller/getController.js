var mess = "";
var message = { mess: mess };
let getHomePage = (req, res) => {
  try {
    message.mess = "WELCOME BRO";
    return res.render("home", { message: message });
  } catch (error) {
    console.log(error);
    return res.redirect("/");
  }
};
export default {
  getHomePage,
};
