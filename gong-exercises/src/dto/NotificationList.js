
export class NotificationList {
    constructor(list) {
        this.list = list;
    }

    static fromJson(json) {
        return new NotificationList(json.list);
    }
}