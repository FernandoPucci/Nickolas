 CREATE TRIGGER TAI_RATING
  AFTER INSERT ON RATING
  FOR EACH ROW
  EXECUTE PROCEDURE FUN_ATUALIZA_RATING_TRIGGER();