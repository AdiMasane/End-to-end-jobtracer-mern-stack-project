import Job from "../models/Job.js";


// 🔹 CREATE JOB
export const createJob = async (req, res) => {
  try {
    const { company, position, status } = req.body;

    const job = await Job.create({
      company,
      position,
      status,
      user: req.user.userId,   // 🔥 attach logged-in user
    });

    res.status(201).json(job);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 🔹 GET ALL JOBS (USER-SPECIFIC)
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      user: req.user.userId,   // 🔥 filter by user
    }).sort({ createdAt: -1 });

    res.status(200).json(jobs);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 🔹 GET SINGLE JOB
export const getSingleJob = async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.params.id,
      user: req.user.userId,   // 🔐 ensure ownership
    });

    if (!job) {
      return res.status(404).json({ msg: "Job not found" });
    }

    res.status(200).json(job);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 🔹 UPDATE JOB
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.userId,   // 🔐 only owner can update
      },
      req.body,
      { new: true, runValidators: true }
    );

    if (!job) {
      return res.status(404).json({ msg: "Job not found or unauthorized" });
    }

    res.status(200).json(job);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 🔹 DELETE JOB
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,   // 🔐 only owner can delete
    });

    if (!job) {
      return res.status(404).json({ msg: "Job not found or unauthorized" });
    }

    res.status(200).json({ msg: "Job deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};