CREATE TABLE IF NOT EXISTS preferimet (
  github_id TEXT NOT NULL REFERENCES profilet(github_id),
  udhetim_id TEXT NOT NULL REFERENCES udhetimet(id),
  krijuar_me TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  PRIMARY KEY (github_id, udhetim_id)
);