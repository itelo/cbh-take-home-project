const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const getCandidateBasedOnEvent = (event) => {
  if (event) {
    if (event.partitionKey) {
      return event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      return crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  return null;
}

const validateCandidateAsString = (candidate) => {
  const isCandidateString = typeof candidate !== "string";

  if (candidate) {
    if (isCandidateString) {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  return candidate;
}

const validateCandidateLength = (candidate) => {
  const isCandidateLenBiggerThanMaxLen = candidate.length > MAX_PARTITION_KEY_LENGTH
  
  if (isCandidateLenBiggerThanMaxLen) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
}

exports.deterministicPartitionKey = (event) => {
  const candidate = getCandidateBasedOnEvent(event);
  const validCandidate = validateCandidateAsString(candidate);

  return validateCandidateLength(validCandidate);
};