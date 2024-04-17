const Member = require("../models/member");

async function createMember(data) {
  try {
    const member = new Member(data);;
    const result = await member.save();
    // console.log(data);
    return result;
  } catch (error) {
    throw error;
  }
}

// READ operation
async function getMembers() {
  try {
    const members = await Member.find();
    return members;
  } catch (error) {
    throw error;
  }
}

// UPDATE operation
async function updateMember(id, newData) {
  try {
    const updatedMember = await Member.findByIdAndUpdate(id, newData, {
      new: true,
    });
    return updateMember;
  } catch (error) {
    throw error;
  }
}

// DELETE operation
async function deleteMember(id) {
  try {
    const deletedMember = await Member.findByIdAndDelete(id);
    return deletedMember;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createMember,
  getMembers,
  updateMember,
  deleteMember,
};
