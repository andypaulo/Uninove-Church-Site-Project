
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    sobrenome VARCHAR(120),
    email VARCHAR(180) NOT NULL,   
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    tipo_usuario VARCHAR(20),      -- admin ou comum
    endereco VARCHAR(255),
    grade_familia VARCHAR(120),
    telefone VARCHAR(25),
    cpf VARCHAR(20)
);

CREATE TABLE familia (
id int,
nome_Familiar varchar(100),
sobrenome varchar(100),
endereço varchar(250),
telefone varchar(20)
);

CREATE TABLE solicitacoes_oracao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    titulo VARCHAR(200),
    descricao TEXT,
    data_solicitacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_oracao_usuario 
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Recuperação de senha
CREATE TABLE esqueci_minha_senha (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usado TINYINT DEFAULT 0,
    
    CONSTRAINT fk_senha_usuario
        FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);
