// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  return s.split('').filter((item) => t.includes(item)).length === t.length
}

isAnagram("listen", "silentt");