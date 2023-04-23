exports.getAllBlogs = async (req, res) => {
  try {
    res.status(200).json({
      status: 'Sucess',
      message: "yah it's working",
    });
  } catch (error) {
    res.status(200).json({
      status: 'Fail',
      message: error.message,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    res.status(200).json({
      status: 'Sucess',
      message: 'Succesfully posted',
    });
  } catch (error) {
    res.status(200).json({
      status: 'Fail',
      message: error.message,
    });
  }
};
