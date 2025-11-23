export function requireEmployer(req, res, next) {
  if (req.user.role !== "employer") {
    return res.status(403).json({ error: "Employer access only" });
  }
  next();
}

export function requireWorker(req, res, next) {
  if (req.user.role !== "worker") {
    return res.status(403).json({ error: "Worker access only" });
  }
  next();
}
