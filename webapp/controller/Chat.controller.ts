import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class AppController extends Controller {

    model = new JSONModel({
        messages: [],
        chatMessage: ""
    });

    public onInit(): void {
        this.getView().setModel(this.model);
    }

    public onSendMessage(): void {
        const sMessage = this.model.getProperty("/chatMessage");
        if (!sMessage) {
            return;
        }

        const aMessages = this.model.getProperty("/messages") as Array<{ text: string; sender: string }>;

        // Add user message
        aMessages.push({ text: sMessage, sender: "user" });

        // Add response message (mocked)
        aMessages.push({ text: "This is a response.", sender: "response" });

        this.model.setProperty("/messages", aMessages);
        this.model.setProperty("/chatMessage", "");
    }
}
