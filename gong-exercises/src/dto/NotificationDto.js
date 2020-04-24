export class NotificationDto {
    constructor(type, tweet) {
        this.type = type;
        this.tweet = tweet === undefined ? undefined : tweet;
    }

    static fromJson(json) {
        return new NotificationDto(json.type, json.tweet === undefined ? undefined : json.tweet);
    }
}