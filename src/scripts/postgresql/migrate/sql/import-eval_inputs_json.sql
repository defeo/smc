INSERT INTO eval_inputs (
  SELECT
    (a#>>'{id,0}')::CHAR(40),
    to_timestamp((a#>>'{id,1,epoch_time}')::FLOAT),
    (a#>>'{id,2}')::INTEGER,
    (a#>'{input}')
  FROM eval_inputs_json WHERE to_timestamp((a#>>'{id,1,epoch_time}')::FLOAT) is NOT NULL
) ON CONFLICT(string_id, time, user_id) DO NOTHING;

/* The timestamp not null business is because a very small number of the
   inputs have the wrong timestamp format.
   Since this is of value completely for analytics purposes later
   discarding some data is fine.
*/