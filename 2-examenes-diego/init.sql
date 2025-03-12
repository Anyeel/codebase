CREATE TABLE IF NOT EXISTS Pacientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(100) NOT NULL,
    edad INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS MedicionesEEG (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paciente_id INTEGER NOT NULL,
    delta REAL,
    theta REAL,
    alpha REAL,
    beta REAL,
    gamma REAL,
    amplitud REAL,
    notas_adicionales TEXT,
    fecha_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES Pacientes(id)
);

-- Insertar pacientes
INSERT INTO Pacientes (nombre, edad) VALUES ('Juan Perez', 39);
INSERT INTO Pacientes (nombre, edad) VALUES ('Maria Garcia', 45);
INSERT INTO Pacientes (nombre, edad) VALUES ('Carlos Lopez', 55);
INSERT INTO Pacientes (nombre, edad) VALUES ('Ana Martinez', 30);
INSERT INTO Pacientes (nombre, edad) VALUES ('Luis Hernandez', 25);
INSERT INTO Pacientes (nombre, edad) VALUES ('Elena Alvarez', 48);
INSERT INTO Pacientes (nombre, edad) VALUES ('Miguel Torres', 35);
INSERT INTO Pacientes (nombre, edad) VALUES ('Lucia Romero', 52);
INSERT INTO Pacientes (nombre, edad) VALUES ('Jose Fernandez', 60);
INSERT INTO Pacientes (nombre, edad) VALUES ('Carmen Sanchez', 28);

-- Insertar mediciones EEG
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (1, 0.5, 2.0, 4.0, 56.0, 12.0, 40.0, 'Paciente en reposo');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (2, 1.2, 3.5, 7.8, 22.4, 45.1, 80.3, 'Prueba de activación');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (3, 0.0, 4.0, 9.0, 18.0, 60.0, 100.0, 'Paciente dormido');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (4, 2.1, 5.2, 8.3, 15.4, 55.5, 70.6, 'Estímulo visual');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (5, 1.3, 2.4, 6.7, 17.8, 49.9, 90.5, 'Estímulo auditivo');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (6, 0.2, 4.3, 8.6, 25.7, 31.8, 60.9, 'Paciente en reposo');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (7, 3.0, 5.0, 7.0, 28.0, 64.0, 110.0, 'Prueba de activación');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (8, 1.5, 3.6, 9.7, 12.8, 43.9, 75.5, 'Estímulo visual');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (9, 0.7, 4.8, 6.9, 18.0, 50.0, 85.5, 'Paciente dormido');
INSERT INTO MedicionesEEG (paciente_id, delta, theta, alpha, beta, gamma, amplitud, notas_adicionales) VALUES (10, 2.2, 5.5, 8.8, 20.0, 65.0, 95.0, 'Estímulo auditivo');
