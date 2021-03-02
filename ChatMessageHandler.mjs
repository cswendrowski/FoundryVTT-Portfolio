export default class ChatMessageHandler {
    static async sendMessageAsCody(content) {
        await ChatMessage.create({
            content: content,
            speaker: {scene: "nw3oxK8E7RZf3QFo", token: "ZghVjpRXZJmJxo05", actor: "MIgHay8oOimuWKds", alias: "Cody Swendrowski"},
            type: 2,
            user: "pw2V8xvRLO8dfuct",
        });
    }
}
