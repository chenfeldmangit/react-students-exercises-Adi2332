export class ProfileDto {
    constructor(name, tweetsNumber, location, joinOn, following, followers, bio) {
        this.name = name;
        this.tweetsNumber = tweetsNumber;
        this.joinOn = joinOn;
        this.location = location;
        this.bio = bio;
        this.following = following;
        this.followers = followers;
    }

    update(name, bio, location){
      this.name = name;
      this.bio = bio;
      this.location = location;
      console.log(name);
    };
}