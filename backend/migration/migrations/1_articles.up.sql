create table if not exists articles (
    id integer auto_increment primary key,
    user_id integer,
    title varchar(40),
    description varchar(40)
)