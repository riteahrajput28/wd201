const todoList = () => {
    all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      const now = new Date();
      return all.filter((item) => new Date(item.dueDate) < now && !item.completed);
    };
  
    const dueToday = () => {
      const now = new Date();
      return all.filter(
        (item) =>
          new Date(item.dueDate).getDate() === now.getDate() &&
          new Date(item.dueDate).getMonth() === now.getMonth() &&
          new Date(item.dueDate).getFullYear() === now.getFullYear() &&
          !item.completed
      );
    };
  
    const dueLater = () => {
      const now = new Date();
      return all.filter(
        (item) =>
          new Date(item.dueDate) > now &&
          !dueToday().includes(item) &&
          !overdue().includes(item) &&
          !item.completed
      );
    };
  
    const toDisplayableList = (list) => {
      return list
        .map((item, index) => {
          const title = item.title;
          const dueDate = formattedDate(new Date(item.dueDate));
          const checkbox = item.completed ? "[x]" : "[ ]";
          return `${index + 1}. ${checkbox} ${title} (${dueDate})`;
        })
        .join("\n");
    };
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  };
  
  // #######################################
  // DO NOT CHANGE ANYTHING BELOW THIS LINE.
  // #######################################
  
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(new Date(new Date().setDate(dateToday.getDate() - 1)));
  const tomorrow = formattedDate(new Date(new Date().setDate(dateToday.getDate() + 1)));
  
  const todos = todoList();
  todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
  todos.add({ title: "Pay rent", dueDate: today, completed: true });
  todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
  todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
  todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  
  console.log("My Todo-list\n");
  
  console.log("Overdue");
  let overdues = todos.overdue();
  let formattedOverdues = todos.toDisplayableList(overdues);
  console.log(formattedOverdues);
  console.log("\n");
  
  console.log("Due Today");
  let itemsDueToday = todos.dueToday();
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
  console.log(formattedItemsDueToday);
  console.log("\n");
  
  console.log("Due Later");
  let itemsDueLater = todos.dueLater();
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
  console.log(formattedItemsDueLater);
  console.log("\n\n");
  