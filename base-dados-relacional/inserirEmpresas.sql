ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas (nome, cnpj) 
VALUES
    ('Bradesco', 92394829348210),
    ('Vale', 92394829348211),
    ('Cielo', 92394829348212);


insert INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES 
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

