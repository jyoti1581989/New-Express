const students = [
    { id: 101, name: "Tom", rollNo: "1001" },
    { id: 102, name: "John", rollNo: "1002" },
    { id: 103, name: "Amber", rollNo: "1003" },
    { id: 104, name: "Jessica", rollNo: "1004" }
]

module.exports = {
    getAll: function () {
        return students
    }
}