# santander-front
>Bedu


# git
| Comando | Descripción |
|---------|-------------|
|`git init`| Iniciar proyecto de git|
|`git add .`| Preparar archivos que se convertirán en commit, El punto es para agregar todos los archivos modificados|
|`git add nombre_archivo`| Preparar el archivo que se convertirá en commit|
|`git commit -m "Aqui va el mensaje"`| Crear commit con su mensaje|
|`git remote add origin https://github.com/andres2093/santander-front.git`| Agregar remoto "Solo la primera vez"|
|`git push -u origin master`| Enviar commits al servidor de GitHub|
|`git push`| Enviar commits al servidcor estando en master|
|`git clone https://github.com/...`| Clonar un repositorio creado en github(con codigo) a local|
git reflog
git reset --soft HEAD~1 Maniene los cambios
git reset --hard HEAD~1

close
closes
closed
fix
fixes
fixed
resolve
resolves
resolved

Linked issue	                    Syntax	Example
Issue in the same repository	    KEYWORD #ISSUE-NUMBER	                Closes #10
Issue in a different repository	    KEYWORD OWNER/REPOSITORY#ISSUE-NUMBER	Fixes octo-org/octo-repo#100
Multiple issues	Use full syntax for each issue	                            Resolves #10, resolves #123, resolves octo-org/octo-repo#100


---

## Ramas
| Comando | Descripción |
|---------|-------------|
|`git pull origin desarrollo`| Para obtener update de la rama desarrollo|
|`git fetch`| Obtener una rama del repositorio remoto|
|`git push origin desarrollo`| Para mandar update de la rama desarrollo|
|`git push -u origin experimental`| Para mandar update de la rama desarrollo|
|`git branch` | Para ver la rama en la que te encuentras|
|`git branch nombre_rama`| Crea una rama|
|`git show-branch`| Ver todas las ramas con sus commits|
|`git branch -a`|Ver todas las ramas|
|`git branch -r`|Ver ramas remotas|
|`git switch nombre_rama`|Cambiar a una rama|
|`git switch -`|regresa a la rama anterior de la que se cambio|
|`git checkout -b nombre_rama`|Crea una rama y se mueve a esta|
|`git checkout -d nombre_rama`|Borra la rama (-delete)|
|`git checkout -D nombre_rama`|Borra la rama forzando la eliminacion|
|`git push origin --delete rama_a_borrar`| Eliminar un branch en remoto|
|`git branch -m old_name new_name`|Renombre una rama (-move)
|`git diff primera_rama segunda_rama`|Comparar ramas (opcional: --color-words)|
|`git branch --merged`|Ver las ramas completamente combinadas|
|`git merge experimental -m 'Esto es un merge con mensaje'`| Permite fusionar desde master nombre_rama con el commit|
|`git help branch`|Ayuda branch|

---

## Stats
| Comando | Descripción |
|---------|-------------|
|`git stash save "mensaje opcional para ti"`| Almacenar temporalmente los cambios locales|
|`git stats list`| |
|`git stats apply nombre_stats`| Aplica los cambios y deja una copia en el stats|
|`git stats pop nombre_stats`| Aplica los cambios y elimina los archivos del stats|
|`git stats drop nombre`| Elimina los cambios sin aplicarlos|
|`git stats clear`| Limpia todo el stats|

---

## Merge
| Comando | Descripción |
|---------|-------------|
|`git merge nombre_rama`| Permite fusionar desde master nombre_rama (commit realizados si no no deja)|
|`git rebase`| mover la rama a otro punto del branch|
|``| |
|``| |
|``| |
|``| |

---

# npm

| Comando | Descripción |
|---------|-------------|
|`npm init`| Inicia un proyecto nuevo genera (package.json)|
|`npm init -y`| Inicia un proyecto nuevo genera (package.json) rapido|
|`npm i dependencia`| Instala dependencia (pueden separarse con estapios para instalar mas de uno|
|`npm install`| Para instalar todas las dependencias instalados en package.json|
|`npm i -D dependencia`| Instala dependencia en modo development|
|`node .\node_modules\sass\sass.js --watch .\scss\main.scss output.css`| Este comando sirve para el watch de sass en windows|
|``| |
|``| |

---

# Laravel

| Comando | Descripción |
|---------|-------------|
|`php artisan serve`| Corre el servidor incluido|



*crear gitinore*