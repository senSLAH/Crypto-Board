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
      this.unblock();
      var future=new Future();
      
      exec("cd PATH/TO/HASHCAT && cat hashcat.potfile",function(error,stdout,stderr){//if you have hashcat change set PATH to your hashcat directory and path to your hashcat.potfile file on windows may be called differently
          let search_error = new RegExp("^.*" + "No hashes loaded." + ".*$", 'm');
          let result = new RegExp("^.*" + command[1] + ".*$", 'm');
            if(stdout.match(result)){
              future.return(stdout.match(result)[0].split(':')[1]);
            }else{
              exec(command[0],function(error,stdout,stderr){
                future.return(stdout.toString());
              });
          }
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
