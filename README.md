## Suggestion Box

#### Application Spec

__User__

- Should be able to create/read/update/delete a suggestion
- Should be able to create/read/update/delete a suggestion box
- Should be able to add/remove other users to their suggestion box
- Should be able to add/remove a suggestion from their box
- Should be able to add/remove a suggestion to box they're added to
- Should be able to archive suggestions after box open date
- Should be able to add feedback to suggestions after box open date

__Box__

- Should allow read access to users on a specified date
- Should allow write access to all _added_ users
- Should contain many suggestions
- Should provide full CRUD to _owner_
- Should not provide read access until after open date
- Should empty box after open date
- Should archive old suggestions after open date

__Suggestions__

- Should belong to a suggestion box
- Should belong to a user
- Should provide full CRUD to _creator_
- Should be hidden from _added_ users until _box_ is opened
- Should ask user 15 minutes after creation if they still want to add the suggestion

#### Stack

- React
- Apollo Client
- GraphCool
