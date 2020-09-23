CREATE table if not EXISTS empresas (
    id INT unsigned not NULL auto_increment,
    nome VARCHAR(255) NOT NULL,
    cnpj int unsigned,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);


-- Cidades Empresas
create TABLE if not EXISTS  empresas_unidades (
    empresa_id int unsigned NOT NULL,
    cidade_id INT unsigned NOT NULL,
    sede TINYINT(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id)
)