# Migrar BD MySQL o MariaDB

Aplicación que permite migrar una BD desde un servidor a otro

## Configuración

Crear un archivo `.env` a partir del archivo `env-example`
```
cp -rf env-example .env
```

Instalar dependencias
```
npn install
```

## Exportar una BD a un archivo sql
```bash
./export.sh
```

## Importar un archivo SQL a la BD
```bash
./import.sh
```
