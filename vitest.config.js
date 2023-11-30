/*
 * Copyright (C) 2023  Yomitan Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import {configDefaults, defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        exclude: [
            ...configDefaults.exclude,
            'dev/lib/**',
            'test/playwright/**'
        ],
        environment: 'jsdom',
        // @ts-ignore - Appears to not be defined in the type definitions (https://vitest.dev/advanced/pool)
        poolOptions: {
            threads: {
                useAtomics: true
            }
        }
    }
});
