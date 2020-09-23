CREATE TABLE IF NOT EXISTS cidades (
    id INT unsigned NOT NULL auto_increment,
    nome VARCHAR(255) NOT NULL,
    estado_id int unsigned NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);