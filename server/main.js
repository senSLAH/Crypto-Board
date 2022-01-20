import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}
 
Meteor.startup(() => {

  // Load future from fibers
  var Future = Npm.require("fibers/future");
  // Load exec
  var exec = Npm.require("child_process").exec;

   // Server methods
   Meteor.methods({
    runCode: function (command) {
      // This method call won't return immediately, it will wait for the
      // asynchronous code to finish, so we call unblock to allow this client
      // to queue other method calls (see Meteor docs)
      this.unblock();
      var future=new Future();
      console.log(command[1])
      exec("cd /Users/illiaaldabaiev/hashcat && cat hashcat.potfile",function(error,stdout,stderr){
          let result = new RegExp("^.*" + command[1] + ".*$", 'm');
          console.log("hej")
          console.log(stdout.match(result)[0].split(':')[1]);
          console.log("hej")
        
        // console.log(stdout)
      //   if(error){
      //     console.log(error);
      //     throw new Meteor.Error(500,command+" failed");
      //   }
      //   future.return(stdout.toString());
      });
      return future.wait();
    }
  });

  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
});
