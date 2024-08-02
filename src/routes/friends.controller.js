let currentId = 2;
let friendsModel = require("../models/friends.model");

function getFriends(req, res) {
  res.status(200).json(friendsModel);
}
function getFriend(req, res) {
  const foundFriend = friendsModel.find(
    (friend) => friend.id === +req.params.id
  );
  if (!foundFriend)
    return res
      .status(404)
      .json({ message: `There is no friend with the id: ${req.params.id}` });

  res.status(200).json(foundFriend);
}
function postFriend(req, res) {
  const { name, age } = req.body;
  if (!name && !age)
    return res.status(400).json({ message: "Please provide name and age" });

  const newFriend = { id: currentId++, name, age };
  friendsModel.push(newFriend);

  res.status(201).json(newFriend);
}
function updateFriend(req, res) {
  const foundFriend = friendsModel.find(
    (friend) => friend.id === +req.params.id
  );
  if (!foundFriend)
    return res
      .status(404)
      .json({ message: `There is no friend with the id: ${req.params.id}` });

  const updatedFriend = {
    ...foundFriend,
    name: req.body.name,
    age: req.body.age,
  };
  friendsModel = friendsModel.map((friend) => {
    if (friend.id === +req.params.id) return updatedFriend;
    return friend;
  });
  res.json(updatedFriend);
}
function deleteFriend(req, res) {
  const foundFriend = friendsModel.find(
    (friend) => friend.id === +req.params.id
  );
  if (!foundFriend)
    return res
      .status(404)
      .json({ message: `There is no friend with the id: ${req.params.id}` });

  friendsModel = friendsModel.filter((friend) => friend.id !== +req.params.id);

  res.json(foundFriend);
}

module.exports = {
  getFriends,
  getFriend,
  postFriend,
  updateFriend,
  deleteFriend,
};
