print(
  "Start #################################################################"
);

db = db.getSiblingDB("ganymede");
db.createUser({
  user: "user",
  pwd: "password",
  roles: [{ role: "readWrite", db: "ganymede" }],
});
db.createCollection("users");

print("END #################################################################");