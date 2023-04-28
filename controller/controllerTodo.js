import axios from "axios";

export const getAllTodo = async (req, res) => {
  try {
    const getAll = await axios.get(`https://todolist.api.devcode.gethired.id/todo-items?activity_group_id=1`);
    res.status(200).json(getAll.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal server error" });
  }
};

export const getOneTodo = async (req, res) => {
    const Id = req.params.id;
    try {
      const getOne = await axios.get(`${process.env.URL_2}/${Id}`);
      res.status(200).json(getOne.data);
    } catch (err) {
      if (err.response.status === 404) {
        res.status(404).json({
          status: "Not Found",
          message: `Todo with ID ${Id} Not Found`
        });
      } else {
        res.status(500).json({ err: true, message: "Internal server error" });
      }
    }
  };

  export const createTodo = async (req, res) => {
    try {
      const newData = req.body;
      const createData = await axios.post(`${process.env.URL_2}`, newData);
      res.status(201).json(createData.data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: true, message: "Internal server error" });
    }
  };

  export const updateTodo = async (req, res) => {
    const Id = req.params.id;
    try {
      const updatedData = req.body; 
      const updateData = await axios.patch(`${process.env.URL_2}/${Id}`, updatedData); 
      res.status(200).json(updateData.data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: true, message: "Internal server error" });
    }
  };

  export const deleteTodo = async (req, res) => {
    const Id = req.params.id;
    try {
      const deleteData = await axios.delete(`${process.env.URL_2}/${Id}`);
        res.status(200).json(deleteData.data);
      
    } catch (err) {
      if (err.response.status === 404) {
        res.status(404).json({
          status: "Not Found",
          message: `Todo with ID ${Id} Not Found`
        });
      } else {
        res.status(500).json({ err: true, message: "Internal server error" });
      }
    }
  };
